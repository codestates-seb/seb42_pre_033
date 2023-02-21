package _BE_Project.member.repository;

import _BE_Project.security.jwt.JwtTokenProvider;
import io.jsonwebtoken.Claims;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.concurrent.TimeUnit;

@RequiredArgsConstructor
@Repository
public class RefreshTokenRedisRepository {
  
  private final RedisTemplate<String, String> redisTemplate;
  private final RedisTemplate<String, String> redisBlackListTemplate;
  
  private final JwtTokenProvider jwtTokenProvider;
  
  public void save(String email, String refreshToken){
    redisTemplate.opsForValue().set(
      email,
      refreshToken,
      jwtTokenProvider.parseClaims(refreshToken).getExpiration().getTime(),
      TimeUnit.MILLISECONDS
    );
  }
  
  public String findByEmail(String email){
    return redisTemplate.opsForValue().get(email);
  }
  
  public void deleteByEmail(String email){
    redisTemplate.delete(email);
  }
  
  public void setBlackList(String email, String accessToken, Long expiration){
    redisBlackListTemplate.opsForValue().set(
      email,
      accessToken,
      expiration,
      TimeUnit.MILLISECONDS
    );
  }
  
}
