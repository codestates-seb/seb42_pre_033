package _BE_Project.security.utils;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.AuthorityUtils;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

import java.util.List;
import java.util.stream.Collectors;

public class CustomAuthorityUtils {
  private String adminEmail;
  private final List<String> ADMIN_ROLES_STRING = List.of("ROLE_USER", "ROLE_ADMIN");
  private final List<String> USER_ROLES_STRING = List.of("ROLE_ADMIN");
  
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
