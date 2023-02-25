package _BE_Project.security.exception;

import org.springframework.security.core.AuthenticationException;

public class LogoutException extends AuthenticationException {
  
  public LogoutException(String msg) {
    super(msg);
  }
}
