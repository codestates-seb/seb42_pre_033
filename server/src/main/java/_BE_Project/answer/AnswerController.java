package _BE_Project.answer;

import _BE_Project.member.MemberService;
import _BE_Project.member.service.MemberService;
import _BE_Project.question.QuestionService;
import exception.UnauthorizedException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.lang.reflect.Member;

@RestController
@RequestMapping("/v1/answer")
@Validated
@CrossOrigin
public class AnswerController {

    private final AnswerService answerService;
    private final AnswerMapper mapper;

    private final MemberService memberService;

    private final QuestionService questionService;

    public AnswerController(AnswerService answerService, AnswerMapper mapper, MemberService memberService, QuestionService questionService){
        this.answerService = answerService;
        this.mapper = mapper;
        this.memberService = memberService;
        this.questionService = questionService;
    }


    // 이메일 아이디 의 질문에 대한 답변
    @PostMapping("/{id}/add")
    public ResponseEntity addAnswer(@PathVariable Long id,
                                    @RequestBody AnswerDto.Post requestBody) {
        if (requestBody.getAccessToken().equals("not")) {
            throw new UnauthorizedException("로그인이 필요합니다.");
        }
        Member member = memberService.findByAccessToken(requestBody.getAccessToken());
        Answer answer = mapper.answerPostDtoAnswer(requestBody);
        answerService.create(id, answerEntity, member);
        return new ResponseEntity(HttpStatus.CREATED);

    }

    // 답변을 수정

    @PostMapping("/{id}/edit")
    public ResponseEntity patchAnswer(@PathVariable("id") @Positive long answerId,
                                      @Valid @RequestBody AnswerDto.Patch patchDto){

        if (!answerService.hasAnswer(answerId,memberService.findByAccessToken(patchDto.getAccessToken()))){
            throw new UnauthorizedException("작성자가 아닙니다.");
        }
        Answer updatedAnswer = answerService.updateAnswer(answerId,mapper.answerPatchDtoAnswer(patchDto));

        return new ResponseEntity<>(HttpStatus.OK);
    }

    //답변 삭제
    @DeleteMapping("/{id}/delete")
    public ResponseEntity deleteAnswer(@PathVariable("id") @Positive long answerId,
                                       @RequestBody TokenDto tokenDto){
        if (tokenDto.getAccessToken().equals("not")) {
            throw new UnauthorizedException("로그인이 필요합니다.");
        }
        if (!answerService.hasAnswer(answerId,memberService.findByAccessToken(tokenDto.getAccessToken()))){
            throw new UnauthorizedException("작성자가 아닙니다.");
        }
        answerService.delete(answerId);

        return new ResponseEntity<>(HttpStatus.OK);
    }


}
