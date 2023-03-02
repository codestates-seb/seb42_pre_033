package _BE_Project.answer.controller;

import _BE_Project.answer.dto.AnswerDto;
import _BE_Project.answer.mapper.AnswerMapper;
import _BE_Project.answer.service.AnswerService;
import _BE_Project.answer.entity.Answer;
import _BE_Project.dto.ResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/answers")
@RequiredArgsConstructor
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AnswerController {
    private final AnswerService answerService;
    private final AnswerMapper mapper;
    @PostMapping("/{questionId}")
    public ResponseEntity<?> createAnswer(@PathVariable @Positive Long questionId,
                                          @RequestBody AnswerDto.Post postDto){
        Answer answer = mapper.answerPostDtoToAnswer(postDto);
        answerService.saveAnswer(answer, questionId);

        return new ResponseEntity<>(
                ResponseDto.success(null, "답변이 정상적으로 생성 되었습니다.", HttpStatus.CREATED),
                HttpStatus.CREATED);
    }

    @PatchMapping("/{answerId}")
    public ResponseEntity<?> updateAnswer(@PathVariable @Positive Long answerId,
                                          @RequestBody AnswerDto.Patch patchDto){
        Answer answer = mapper.answerPatchDtoToAnswer(patchDto);
        answerService.updateAnswer(answerId, answer);

        return new ResponseEntity<>(
                ResponseDto.success(null, "답변이 정상적으로 업데이트 되었습니다.", HttpStatus.OK),
                HttpStatus.OK);
    }

    @DeleteMapping("/{answerId}")
    public ResponseEntity<?> deleteAnswer(@PathVariable @Positive Long answerId){
        answerService.deleteAnswer(answerId);

        return new ResponseEntity<>(
                ResponseDto.success(null, "답변이 정상적으로 삭제 되었습니다.", HttpStatus.OK),
                HttpStatus.OK);
    }

    @GetMapping("/{answer-id}")
    public ResponseEntity getAnswer (@PathVariable ("answer-id") @Positive long answerId) {

        Answer findedAnswer = answerService.findAnswer(answerId);

        return new ResponseEntity(mapper.answerToAnswerResponseDto(findedAnswer), HttpStatus.OK);

    }
}
