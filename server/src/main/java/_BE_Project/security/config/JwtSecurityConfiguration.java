package _BE_Project.security.config;

import _BE_Project.member.repository.MemberRepository;
import _BE_Project.member.repository.RefreshTokenRedisRepository;
import _BE_Project.member.service.MemberService;
import _BE_Project.security.handler.MemberAuthenticationFailureHandler;
import _BE_Project.security.filter.JwtAuthenticationFilter;
import _BE_Project.security.handler.MemberAuthenticationSuccessHandler;
import _BE_Project.security.jwt.JwtTokenProvider;
import _BE_Project.security.filter.JwtVerificationFilter;
import _BE_Project.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
@RequiredArgsConstructor
public class JwtSecurityConfiguration extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
  private final JwtTokenProvider jwtTokenProvider;
  private final CustomAuthorityUtils authorityUtils;
  private final RefreshTokenRedisRepository redisRepository;
  private final MemberRepository memberRepository;

  @Override
  public void configure(HttpSecurity http) {
    AuthenticationManager authenticationManager = http.getSharedObject(AuthenticationManager.class);
    JwtAuthenticationFilter jwtAuthenticationFilter = new JwtAuthenticationFilter(jwtTokenProvider, redisRepository);
    jwtAuthenticationFilter.setAuthenticationManager(authenticationManager);
    jwtAuthenticationFilter.setFilterProcessesUrl("/members/login");
    jwtAuthenticationFilter.setAuthenticationFailureHandler(new MemberAuthenticationFailureHandler());
    jwtAuthenticationFilter.setAuthenticationSuccessHandler(new MemberAuthenticationSuccessHandler());

    JwtVerificationFilter jwtVerificationFilter =
            new JwtVerificationFilter(jwtTokenProvider, authorityUtils, redisRepository, memberRepository);

    http.addFilter(jwtAuthenticationFilter);
    http.addFilterAfter(jwtVerificationFilter, JwtAuthenticationFilter.class);
  }
}
