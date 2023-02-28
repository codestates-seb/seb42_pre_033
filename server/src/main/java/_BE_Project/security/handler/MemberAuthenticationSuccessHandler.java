package _BE_Project.security.handler;

import _BE_Project.dto.ResponseDto;
import com.google.gson.Gson;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class MemberAuthenticationSuccessHandler implements AuthenticationSuccessHandler {
  @Override
  public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
    
    Gson gson = new Gson();
    response.setContentType(MediaType.APPLICATION_JSON_VALUE);
    response.setStatus(HttpStatus.OK.value());
    response.getWriter().write(
      gson.toJson(
        ResponseDto.success(null, "정상적으로 로그인 되었습니다.", HttpStatus.OK),
        ResponseDto.class)
    );
  }
}
