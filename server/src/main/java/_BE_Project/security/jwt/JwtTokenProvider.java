package _BE_Project.security.jwt;

import _BE_Project.member.entity.Member;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.io.Encoders;
import io.jsonwebtoken.security.Keys;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.Key;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Component
@Getter
public class JwtTokenProvider {
  
  private Key key;
  
  @Value("${jwt.access-token-expiration-millisecond}")
  private int accessTokenExpirationMillisecond;
  
  @Value("${jwt.refresh-token-expiration-millisecond}")
  private int refreshTokenExpirationMillisecond;
  
  public JwtTokenProvider(@Value("${jwt.key}") String secretKey) {
    String base64EncodedSecretKey = Encoders.BASE64.encode(secretKey.getBytes(StandardCharsets.UTF_8));
    byte[] keyBytes = Decoders.BASE64.decode(base64EncodedSecretKey);
    this.key = Keys.hmacShaKeyFor(keyBytes);
  }
  
  public String generateAccessToken(Member member){
    Calendar calendar = Calendar.getInstance();
    calendar.add(Calendar.MILLISECOND, accessTokenExpirationMillisecond);
    Map<String, Object> claims = new HashMap<>();
    claims.put("roles", member.getRoles());
    claims.put("email", member.getEmail());
  
    return Jwts.builder()
      .setSubject(member.getEmail())
      .setIssuedAt(Calendar.getInstance().getTime())
      .setExpiration(calendar.getTime())
      .setClaims(claims)
      .signWith(key, SignatureAlgorithm.HS256)
      .compact();
  }
  
  public String generateRefreshToken(Member member){
    Calendar calendar = Calendar.getInstance();
    calendar.add(Calendar.MILLISECOND, refreshTokenExpirationMillisecond);
    
    return Jwts.builder()
      .setSubject(member.getEmail())
      .setIssuedAt(Calendar.getInstance().getTime())
      .setExpiration(calendar.getTime())
      .signWith(key, SignatureAlgorithm.HS256)
      .compact();
  }
  
  public Claims parseClaims(String jws){
    return Jwts.parserBuilder()
      .setSigningKey(key)
      .build()
      .parseClaimsJws(jws)
      .getBody();
  }
}
