package _BE_Project.answer.service;

import _BE_Project.answer.entity.Answer;
import _BE_Project.answer.repository.AnswerRepository;
import _BE_Project.member.service.MemberService;
import _BE_Project.question.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnswerServiceV2 {
  private final AnswerRepository answerRepository;
  private final MemberService memberService;
  private final QuestionService questionService;
  public Answer saveAnswer(Answer answer){
    answer.setMember(memberService.findByEmail());
    verifyAnswer(answer);
    return answerRepository.save(answer);
    
  }
  
  public void verifyAnswer(Answer answer){
    questionService.findVerifyQuestion(answer.getQuestion().getQuestionId());
  }
}
