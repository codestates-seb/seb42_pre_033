package _BE_Project.questionScore.controller;

import _BE_Project.dto.ResponseDto;
import _BE_Project.questionScore.service.QuestionScoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/questionScores")
@RequiredArgsConstructor
public class QuestionScoreController {
  private final QuestionScoreService questionScoreService;
  @PostMapping("/increase/{questionId}")
  public ResponseEntity<?> increaseScore(@PathVariable @Positive Long questionId){
    questionScoreService.increaseScore(questionId);
    return new ResponseEntity<>(ResponseDto.success(null, "질문에 좋아요를 추가했습니다.", HttpStatus.OK), HttpStatus.OK);
  }
  
  @DeleteMapping("/decrease/{questionId}")
  public ResponseEntity<?> decreaseScore(@PathVariable @Positive Long questionId){
    questionScoreService.decreaseScore(questionId);
    return new ResponseEntity<>(ResponseDto.success(null, "질문에 좋아요를 취소했습니다.", HttpStatus.OK), HttpStatus.OK);
  }
}
