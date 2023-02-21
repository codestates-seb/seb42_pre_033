package _BE_Project.dto;

import _BE_Project.exception.ExceptionCode;
import lombok.AllArgsConstructor;
import lombok.Getter;

@AllArgsConstructor
@Getter
public class ResponseDto<T> {
  
  private boolean success;
  private T data;
  private ExceptionCode exceptionCode;
  
  public static <T> ResponseDto<T> success(T data){
    return new ResponseDto<>(true, data, null);
  }
  
  public static <T> ResponseDto<T> fail(ExceptionCode exceptionCode){
    return new ResponseDto<>(false, null, exceptionCode);
  }
  
}
