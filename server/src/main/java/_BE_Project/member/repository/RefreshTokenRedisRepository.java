package _BE_Project.member.repository;

import _BE_Project.security.jwt.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Repository;

import java.util.concurrent.TimeUnit;

@RequiredArgsConstructor
@Repository
public class RefreshTokenRedisRepository {
  
  private final RedisTemplate<String, String> redisTemplate;
  private final JwtTokenProvider jwtTokenProvider;
  
  public void save(String email, String refreshToken){
    redisTemplate.opsForValue().set(
      email,
      refreshToken,
      jwtTokenProvider.parseClaims(refreshToken).getExpiration().getTime(),
      TimeUnit.MILLISECONDS
    );
  }
  
  public String findBy(String key){
    return redisTemplate.opsForValue().get(key);
  }
  
  public void deleteBy(String key){
    redisTemplate.delete(key);
  }
  
  public void setBlackList(String accessToken){
    redisTemplate.opsForValue().set(
      accessToken,
      "logout",
      jwtTokenProvider.parseClaims(accessToken).getExpiration().getTime(),
      TimeUnit.MILLISECONDS
    );
  }
  
}
