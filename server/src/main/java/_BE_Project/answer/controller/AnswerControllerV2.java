package _BE_Project.answer.controller;

import _BE_Project.answer.dto.AnswerDtoV2;
import _BE_Project.answer.mapper.AnswerMapperV2;
import _BE_Project.answer.service.AnswerServiceV2;
import _BE_Project.answer.entity.Answer;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController("answers")
@RequiredArgsConstructor
public class AnswerControllerV2 {
  private final AnswerServiceV2 answerService;
  private final AnswerMapperV2 mapper;
  @PostMapping("{question_id}")
  public ResponseEntity<?> createAnswer(@PathVariable("question_id") @Positive Long questionId,
                                        @RequestBody AnswerDtoV2.Post postDto){
    postDto.setQuestionId(questionId);
    Answer answer = mapper.answerPostDtoToAnswer(postDto);
    Answer savedAnswer = answerService.saveAnswer(answer);
    
    return new ResponseEntity<>(HttpStatus.CREATED);
  }
  
//  @GetMapping
//  public ResponseEntity<?> getAnswer(){
//
//  }
}
