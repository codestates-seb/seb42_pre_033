package _BE_Project.security.jwt;

import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.RefreshTokenRedisRepository;
import _BE_Project.security.dto.LoginDto;
import _BE_Project.security.service.UserDetailsServiceImpl;
import com.fasterxml.jackson.databind.ObjectMapper;
import lombok.RequiredArgsConstructor;
import lombok.SneakyThrows;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RequiredArgsConstructor
public class JwtAuthenticationFilter extends UsernamePasswordAuthenticationFilter {
  private final JwtTokenProvider jwtTokenProvider;
  private final RefreshTokenRedisRepository redisRepository;
  
  @SneakyThrows
  @Override
  public Authentication attemptAuthentication(HttpServletRequest request, HttpServletResponse response) throws AuthenticationException {
    ObjectMapper objectMapper = new ObjectMapper();
    LoginDto loginDto = objectMapper.readValue(request.getInputStream(), LoginDto.class);
    UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken =
      UsernamePasswordAuthenticationToken.unauthenticated(loginDto.getEmail(), loginDto.getPassword());
    return getAuthenticationManager().authenticate(usernamePasswordAuthenticationToken);
  }
  
  @Override
  protected void successfulAuthentication(HttpServletRequest request, HttpServletResponse response, FilterChain chain, Authentication authResult) throws IOException, ServletException {
    UserDetailsServiceImpl.UserDetailsImpl userDetailsImpl = (UserDetailsServiceImpl.UserDetailsImpl) authResult.getPrincipal();
    Member member = userDetailsImpl.getMember();
    String accessToken = jwtTokenProvider.generateAccessToken(member);
    String refreshToken = jwtTokenProvider.generateRefreshToken(member);
    
    redisRepository.save(member.getEmail(), refreshToken);
    
    response.addHeader("Authorization", "Bearer " + accessToken);
    response.addHeader("Refresh", refreshToken);
    chain.doFilter(request, response);
  }
  
  
}
