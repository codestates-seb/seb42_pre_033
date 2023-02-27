package _BE_Project.member.dto;

import lombok.Builder;
import lombok.Getter;

@Getter
@Builder
public class ResponseDto {
  int status;
  String message;
}
