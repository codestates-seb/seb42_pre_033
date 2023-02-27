package _BE_Project.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;


public enum ExceptionCode {
  MEMBER_NOT_EQUAL(401, "글을 작성한 회원만 수정할 수 있습니다."),
  MEMBER_NOT_FOUND(404, "회원이 존재하지 않습니다."),
  MEMBER_EXISTS(409, "이미 존재하는 회원 입니다."),
  QUESTION_NOT_FOUND(404, "질문 글이 존재하지 않습니다."),
  ANSWER_NOT_FOUND(404, "답변 글이 존재하지 않습니다."),
  ANSWER_SCORE_EXISTS(409, "답변에 이미 좋아요를 누르셨습니다."),
  ANSWER_SCORE_NOT_FOUND(404, "답변에 좋아요를 누르지 않으셨습니다.");

  @Getter
  private int status;

  @Getter
  private String message;

  ExceptionCode(int code, String message) {
    this.status = code;
    this.message = message;
  }
}
