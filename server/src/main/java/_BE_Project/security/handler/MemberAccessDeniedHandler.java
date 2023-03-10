package _BE_Project.security.handler;

import _BE_Project.exception.ErrorResponse;
import _BE_Project.security.utils.ErrorResponder;
import com.google.gson.Gson;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.security.web.access.AccessDeniedHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
@Slf4j
public class MemberAccessDeniedHandler implements AccessDeniedHandler {

  @Override
  public void handle(HttpServletRequest request, HttpServletResponse response, AccessDeniedException accessDeniedException) throws IOException, ServletException {
    log.warn("# Forbidden error happened: {}", accessDeniedException.getMessage());
    ErrorResponder.sendErrorResponse(response, HttpStatus.FORBIDDEN,  "접근할 권한이 없습니다.");
  }
}
