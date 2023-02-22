package _BE_Project.exceiption;

import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public enum ExceptionCode {
  MEMBER_NOT_FOUND(404, "멤버가 존재하지 않습니다."),
  MEMBER_LOGOUT(401,"로그아웃 상태 입니다."),
  MEMBER_EXISTS(409, "멤버가 존재하지 않습니다.");
  private int status;
  private String message;
}
