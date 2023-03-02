package _BE_Project.security.handler;

import _BE_Project.security.exception.SecurityAuthenticationException;
import _BE_Project.security.utils.ErrorResponder;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.security.SignatureException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.InsufficientAuthenticationException;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.AuthenticationEntryPoint;
import org.springframework.stereotype.Component;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Slf4j
@Component
public class MemberAuthenticationEntryPoint implements AuthenticationEntryPoint {

  @Override
  public void commence(HttpServletRequest request, HttpServletResponse response,
                       AuthenticationException authException) throws IOException, ServletException {

    Exception exception = (Exception) request.getAttribute("exception");

    if(exception != null){
      if(exception.getClass().getName().equals(SignatureException.class.getName())){
        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, "Signature 검증에 실패한 토큰 입니다.");
      } else if (exception.getClass().getName().equals(ExpiredJwtException.class.getName())) {
        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, "토큰 기한이 만료 되었습니다. 다시 로그인 하십시오.");
      } else if (exception.getClass().getName().equals(SecurityAuthenticationException.class.getName())) {
        ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, exception.getMessage());
      }
    } else {
      ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, "비회원 입니다. 접근할 권한이 없습니다.");
    }
  }
}
