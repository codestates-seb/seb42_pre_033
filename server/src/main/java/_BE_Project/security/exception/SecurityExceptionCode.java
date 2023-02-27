package _BE_Project.security.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public enum SecurityExceptionCode {
  
  MEMBER_LOGOUT(401, "로그아웃 또는 회원 탈퇴한 토큰 입니다.");
  private int code;
  private String message;
}
