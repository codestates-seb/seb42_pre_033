package _BE_Project.security.jwt;

import _BE_Project.security.utils.CustomAuthorityUtils;
import io.jsonwebtoken.*;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.catalina.core.ApplicationContext;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;
import java.util.Map;

@RequiredArgsConstructor
@Slf4j
public class JwtVerificationFilter extends OncePerRequestFilter {
  private final JwtTokenProvider jwtTokenProvider;
  private final CustomAuthorityUtils authorityUtils;
  private final String HEADER_PREFIX = "Bearer ";
  
  @Override
  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain) throws ServletException, IOException {
    try {
      Claims claims = verifyJws(request);
      setAuthenticationToContext(claims);
    }catch (SecurityException | MalformedJwtException e) {
      log.info("Invalid JWT signature, 유효하지 않는 JWT 서명 입니다.");
    } catch (ExpiredJwtException e) {
      log.info("Expired JWT token, 만료된 JWT token 입니다.");
    } catch (UnsupportedJwtException e) {
      log.info("Unsupported JWT token, 지원되지 않는 JWT 토큰 입니다.");
    } catch (IllegalArgumentException e) {
      log.info("JWT claims is empty, 잘못된 JWT 토큰 입니다.");
    }
  }
  
  @Override
  protected boolean shouldNotFilter(HttpServletRequest request) throws ServletException {
    String authorization = request.getHeader("Authorization");
    return authorization == null || !authorization.startsWith("Bearer");
  }
  
  public Claims verifyJws(HttpServletRequest request){
    String jws = request.getHeader("Authorization").substring(HEADER_PREFIX.length());
    return jwtTokenProvider.parseClaims(jws);
//    Map<String, Object> claims = jwtTokenProvider.parseClaims(jws);
//    return claims;
  }
  
  public void setAuthenticationToContext(Claims claims){
    String email = (String) claims.get("email");
    List<GrantedAuthority> authorities = authorityUtils.createAuthority((List) claims.get("roles"));
    UsernamePasswordAuthenticationToken token =
      UsernamePasswordAuthenticationToken.authenticated(email, null, authorities);
    SecurityContextHolder.getContext().setAuthentication(token);
  }
}
