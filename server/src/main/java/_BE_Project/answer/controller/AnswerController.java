package _BE_Project.answer.controller;

import _BE_Project.answer.dto.AnswerDtoV2;
import _BE_Project.answer.entity.Answer;
import _BE_Project.answer.mapper.AnswerMapper;
import _BE_Project.answer.service.AnswerService;
import _BE_Project.member.service.MemberService;
import _BE_Project.question.QuestionService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;


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

    @PostMapping
    public ResponseEntity postAnswer (@RequestBody AnswerDtoV2.Post post) {

        Answer saveAnswer = answerService.createAnswer(mapper.answerPostDtoAnswer(post));

        return new ResponseEntity(mapper.answerToAnswerResponseDto(saveAnswer), HttpStatus.CREATED);

    }


//
//
//    // 이메일 아이디 의 질문에 대한 답변 (토큰 없이 어떻게 구현을 해야할까..)
//    @PostMapping("/{id}/add")
//    public ResponseEntity addAnswer(@PathVariable Long id,
//                                    @RequestBody AnswerDto.Post requestBody) {
//
//        String email = getCurrentMemberEmail();
//        Member findMember = memberService.findByEmail(email);
//        Answer answer = mapper.answerPostDtoAnswer(requestBody);
//        answerService.create(id, answer, findMember);
//        return new ResponseEntity(HttpStatus.CREATED);
//
//    }
//
//    // 답변을 수정
//
//    @PatchMapping("/{id}/edit")
//    public ResponseEntity patchAnswer(@PathVariable("id") @Positive long answerId,
//                                      @Valid @RequestBody AnswerDto.Patch patchDto){
//
//        Member findmember = memberService.findByEmail();
//        Answer updatedAnswer = answerService.updateAnswer(answerId,mapper.answerPatchDtoAnswer(patchDto));
//
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//


    //답변 삭제
//    @DeleteMapping("/{id}/delete")
//    public ResponseEntity deleteAnswer(@PathVariable("id") @Positive long answerId,
//                                       @RequestBody TokenDto tokenDto){
//
//        Member findmember = memberService.findByEmail();
//        answerService.delete(answerId);
//
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
//
//    // 질문자가 답변 채택 취소
//    @PostMapping("/{id}/accept/undo")
//    public ResponseEntity getAcceptUndo(@PathVariable("id") @Positive long answerId,
//                                        @RequestBody TokenDto tokenDto){
////        if (tokenDto.getAccessToken().equals("not")) {
////            throw new UnauthorizedException("로그인이 필요합니다.");
////        }
////        Answer answer = answerService.findById(answerId);
////        Question question = answer.getQuestion();
////        if (!questionService.hasQuestion(question.getQuestionId(),memberService.findByAccessToken(tokenDto.getAccessToken()))){
////            throw new UnauthorizedException("작성자가 아닙니다.");
////        }
//        Member findmember = memberService.findByEmail();
//
//        return new ResponseEntity(HttpStatus.OK);
//    } //녹녹
//    // 추천기능
//    @PostMapping("{answerId}/upVote")
//    public ResponseEntity upVote(@PathVariable("answerId") Long id,
//                                 @RequestBody TokenDto tokenDto) {
//        Answer answer = answerService.findById(id);
//
//        Member findmember = memberService.findByEmail();
//
//        return new ResponseEntity<>(HttpStatus.OK);
//
//    }
//    public String getCurrentMemberEmail(){
//        return (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
//    }
}