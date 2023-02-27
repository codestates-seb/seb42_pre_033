package _BE_Project.security.handler;

import _BE_Project.security.utils.ErrorResponder;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Slf4j
public class MemberAuthenticationFailureHandler implements AuthenticationFailureHandler {
  
  @Override
  public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response, AuthenticationException exception) throws IOException, ServletException {
    log.error("# Authentication failed: {}", exception.getMessage());
    ErrorResponder.sendErrorResponse(response, HttpStatus.UNAUTHORIZED, "자격 증명에 실패했습니다. ID 또는 Password를 확인해 주세요.");
  }
}
