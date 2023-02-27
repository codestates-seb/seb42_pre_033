package _BE_Project.answerScore.controller;

import _BE_Project.answerScore.service.AnswerScoreService;
import _BE_Project.dto.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answerScores")
@RequiredArgsConstructor
public class AnswerScoreController {
  private final AnswerScoreService answerScoreService;
  @PostMapping("/increase/{answerId}")
  public ResponseEntity<?> increaseScore(@PathVariable @Positive Long answerId){
    answerScoreService.increaseScore(answerId);
    return new ResponseEntity<>(ResponseDto.success(null, "답변에 좋아요를 추가했습니다.", HttpStatus.OK), HttpStatus.OK);
  }
  
  @DeleteMapping("/decrease/{answerId}")
  public ResponseEntity<?> decreaseScore(@PathVariable @Positive Long answerId){
    answerScoreService.decreaseScore(answerId);
    return new ResponseEntity<>(ResponseDto.success(null, "답변에 좋아요를 취소했습니다.", HttpStatus.OK), HttpStatus.OK);
  }
}
