package _BE_Project.answerScore.controller;

import _BE_Project.answerScore.service.AnswerScoreService;
import _BE_Project.dto.ResponseDto;
import _BE_Project.member.entity.Member;
import _BE_Project.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answerScores")
@RequiredArgsConstructor
public class AnswerScoreController {
    private final AnswerScoreService answerScoreService;
    @GetMapping("increase/{answer_id}")
    public ResponseEntity<?> increaseScore(@PathVariable("answer_id") @Positive Long answerId){
        answerScoreService.increaseScore(answerId);
        return new ResponseEntity<>(ResponseDto.success(null, "질문에 좋아요를 추가했습니다."), HttpStatus.OK);
    }

    @GetMapping("decrease/{answer_id}")
    public ResponseEntity<?> decreaseScore(@PathVariable("answer_id") @Positive Long answerId){
        answerScoreService.decreaseScore(answerId);
        return new ResponseEntity<>(ResponseDto.success(null, "질문에 좋아요를 취소했습니다."), HttpStatus.OK);
    }
}
