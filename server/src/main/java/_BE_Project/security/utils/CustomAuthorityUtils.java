package _BE_Project.security.utils;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

// 어노테이션이 없어서 실행시 에러발생 -> @Conponent 어노테이션 추가
@Component
public class CustomAuthorityUtils {
  @Value(value = "${admin.email}")
  private String adminEmail;
  private final List<String> ADMIN_ROLES_STRING = List.of("ROLE_USER", "ROLE_ADMIN");
  private final List<String> USER_ROLES_STRING = List.of("ROLE_USER");

  public List<GrantedAuthority> createAuthority(List<String> roles){
    return roles.stream()
            .map(role -> new SimpleGrantedAuthority(role))
            .collect(Collectors.toList());
  }

  public List<String> createRoles(String email){
    if(email.equals(adminEmail)){
      return ADMIN_ROLES_STRING;
    }
    return USER_ROLES_STRING;
  }
}
