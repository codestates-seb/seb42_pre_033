package _BE_Project.security.config;

import org.springframework.boot.autoconfigure.security.ConditionalOnDefaultWebSecurity;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.factory.PasswordEncoderFactories;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.List;

@Configuration
@EnableWebSecurity(debug = true)
@ConditionalOnDefaultWebSecurity
public class SecurityConfiguration {
  
  public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
    http
      .headers().frameOptions().sameOrigin()
      .and()
      .httpBasic().disable()
      .formLogin().disable()
      .sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS)
      .and()
      .csrf().disable()
      .cors(Customizer.withDefaults())
      .authorizeHttpRequests(authorize -> { authorize
        .antMatchers(HttpMethod.POST,"/members/login","/members").permitAll()
        .antMatchers(HttpMethod.POST,"/members").hasRole("USER")
        .antMatchers(HttpMethod.GET,"/members/**").permitAll()
        .antMatchers(HttpMethod.GET,"/members/mypage").hasRole("USER")
        .antMatchers(HttpMethod.PATCH,"/members").hasRole("USER")
        .antMatchers(HttpMethod.DELETE,"/members").hasRole("USER")
        .antMatchers(HttpMethod.POST,"/questions").hasRole("USER")
        .antMatchers(HttpMethod.PATCH,"/questions").hasRole("USER")
        .antMatchers(HttpMethod.POST,"/answers").hasRole("USER")
        .antMatchers(HttpMethod.PATCH,"/answers").hasRole("USER")
        .antMatchers(HttpMethod.PATCH,"/questions").hasRole("USER");
      });
      
      return http.build();
  }
  
  @Bean
  public PasswordEncoder passwordEncoder(){
    return PasswordEncoderFactories.createDelegatingPasswordEncoder();
  }
  
  @Bean
  public CorsConfigurationSource corsConfigurationSource(){
    CorsConfiguration corsConfiguration = new CorsConfiguration();
    corsConfiguration.setAllowedOrigins(List.of("*"));
    corsConfiguration.setAllowedMethods(List.of("GET", "POST","DELETE","PATCH"));
    corsConfiguration.setAllowedHeaders(List.of("*"));
    corsConfiguration.setMaxAge(3000L);
    UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
    source.registerCorsConfiguration("/**", corsConfiguration);
    return source;
  }
}
