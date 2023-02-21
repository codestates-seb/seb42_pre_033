package _BE_Project.security.service;

import _BE_Project.member.entity.Member;
import _BE_Project.member.service.MemberService;
import _BE_Project.security.utils.CustomAuthorityUtils;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import java.util.Collection;

@RequiredArgsConstructor
public class UserDetailsServiceImpl implements UserDetailsService {
  private final MemberService memberService;
  private final CustomAuthorityUtils authorityUtils;
  
  @Override
  public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
    Member findedMember = memberService.verifyExistsEmail(username);
    
    return new UserDetailsImpl(findedMember);
  }
  @AllArgsConstructor
  @Getter
  public class UserDetailsImpl implements UserDetails {
    
    private Member member;
    
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
      return authorityUtils.createAuthority(member.getRoles());
    }
  
    @Override
    public String getPassword() {
      return member.getPassword();
    }
  
    @Override
    public String getUsername() {
      return member.getEmail();
    }
  
    @Override
    public boolean isAccountNonExpired() {
      return true;
    }
  
    @Override
    public boolean isAccountNonLocked() {
      return true;
    }
  
    @Override
    public boolean isCredentialsNonExpired() {
      return true;
    }
  
    @Override
    public boolean isEnabled() {
      return true;
    }
  }
}
