package _BE_Project.security.filter;

import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.MemberRepository;
import _BE_Project.member.repository.RefreshTokenRedisRepository;
import _BE_Project.security.exception.SecurityAuthenticationException;
import _BE_Project.security.exception.SecurityExceptionCode;
import _BE_Project.security.jwt.JwtTokenProvider;
import _BE_Project.security.utils.CustomAuthorityUtils;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.SignatureException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

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
        setAuthenticationToContext(accessTokenClaims);
      }
    } catch (SignatureException se) {
      request.setAttribute("exception", se);
    } catch (SecurityAuthenticationException e) {
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

    if (redisRepository.findBy(accessToken) != null){
      throw new SecurityAuthenticationException(SecurityExceptionCode.MEMBER_LOGOUT);
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
