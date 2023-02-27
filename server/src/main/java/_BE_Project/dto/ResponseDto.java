package _BE_Project.dto;

import _BE_Project.exception.ExceptionCode;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.lang.Nullable;

import javax.validation.constraints.Null;

@AllArgsConstructor
@Getter
@JsonInclude(value = JsonInclude.Include.NON_NULL)
public class ResponseDto<T> {
  
  private boolean success;
  private T data;
  private String message;
  private ExceptionCode exceptionCode;
  
  public static <T> ResponseDto<T> success(@Nullable T data, @Nullable String message){
    return new ResponseDto<>(true, data, message,null);
  }
  
  
//  public static <T> ResponseDto<T> fail(ExceptionCode exceptionCode){
//    return new ResponseDto<>(false, null,exceptionCode);
//  }
  
}
