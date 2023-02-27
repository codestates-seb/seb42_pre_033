package _BE_Project.security.filter;

import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.MemberRepository;
import _BE_Project.member.repository.RefreshTokenRedisRepository;
import _BE_Project.member.service.MemberService;
import _BE_Project.security.exception.LogoutException;
import _BE_Project.security.jwt.JwtTokenProvider;
import _BE_Project.security.utils.CustomAuthorityUtils;
import com.fasterxml.jackson.databind.DatabindException;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Slf4j
public class JwtVerificationFilter extends OncePerRequestFilter {
  private final JwtTokenProvider jwtTokenProvider;
  private final CustomAuthorityUtils authorityUtils;
  private final RefreshTokenRedisRepository redisRepository;
  private final MemberRepository memberRepository;
  private final String HEADER_PREFIX = "Bearer ";
  
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
  
    try {
      Claims accessTokenClaims = verifyJws(request, response);
      if(accessTokenClaims != null) {
        System.out.println("setAuthenticationToContext 호출 전");
        setAuthenticationToContext(accessTokenClaims);
      }
    } catch (SignatureException se) {
      request.setAttribute("exception", se);
    } catch (LogoutException e) {
      request.setAttribute("exception", e);
    }
    filterChain.doFilter(request, response);
  }
  
  @Override
  protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
    String authorization = request.getHeader("Authorization");
    return authorization == null || !authorization.startsWith("Bearer");
  }
  
  public Claims verifyJws(HttpServletRequest request, HttpServletResponse response){
    String accessToken = request.getHeader("Authorization").substring(HEADER_PREFIX.length());
    String refreshToken = request.getHeader("Refresh");
    
    if(redisRepository.findBy(accessToken) != null){
      throw new LogoutException("로그아웃된 토큰 입니다. 다시 로그인 해주세요.");
    }
    
    Claims refreshTokenClaims = null;
    
    try {
      refreshTokenClaims = jwtTokenProvider.parseClaims(refreshToken);
      return jwtTokenProvider.parseClaims(accessToken);
    }
    catch (ExpiredJwtException ee) {
      if(refreshTokenClaims != null) {
        String findRefreshToken = redisRepository.findBy(refreshTokenClaims.getSubject());
  
        if (refreshToken.equals(findRefreshToken)) {
          Member findMember = memberRepository.findByEmail(refreshTokenClaims.getSubject()).orElse(null);
          String newAccessToken = jwtTokenProvider.generateAccessToken(findMember);
          response.setHeader("Authorization", "Bearer " + newAccessToken);
          return jwtTokenProvider.parseClaims(newAccessToken);
        }
      }
      request.setAttribute("exception", ee);
      return null;
    }
  }
  
  
  
  
  
  public void setAuthenticationToContext(Claims claims){
    String email = (String) claims.get("email");
    List<GrantedAuthority> authorities = authorityUtils.createAuthority((List) claims.get("roles"));
    UsernamePasswordAuthenticationToken token =
      UsernamePasswordAuthenticationToken.authenticated(email, null, authorities);
    SecurityContextHolder.getContext().setAuthentication(token);
  }
}
