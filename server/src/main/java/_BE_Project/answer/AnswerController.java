package _BE_Project.answer;

import _BE_Project.member.MemberService;
import _BE_Project.question.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

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
                                    @RequestBody AnswerDto.Post requestBody){
        Member member = memberService.findByAccessToken(requestBody.getAccessToken());
        AnswerEntity answerEntity = mapper.answerPostDtoAnswer(requestBody);
        answerService.create(id, answer,)
    }



}
