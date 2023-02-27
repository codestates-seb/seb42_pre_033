package _BE_Project.answer.service;

import _BE_Project.answer.entity.Answer;
import _BE_Project.answer.repository.AnswerRepository;
import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.service.MemberService;
import _BE_Project.question.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
  private final AnswerRepository answerRepository;
  private final MemberService memberService;
  private final QuestionService questionService;
  public Answer saveAnswer(Answer answer, Long questionId){
  
    verifyQuestion(questionId, answer);
    answer.setMember(memberService.findByEmail());
    return answerRepository.save(answer);
    
  }
  @Transactional
  public Answer updateAnswer(Long answerId, Answer answer) {
    Answer findAnswer = findAnswer(answerId);
    Member member = memberService.findByEmail();
    if(findAnswer.getMember().getMemberId() != member.getMemberId()){
      throw new BusinessLogicException(ExceptionCode.ANSWER_UPDATE_NO_PERMISSION);
    }
    findAnswer.setAnswerContent(answer.getAnswerContent());
    return findAnswer;
  }
  
  public void verifyQuestion(Long questionId, Answer answer){
    answer.setQuestion(questionService.findVerifyQuestion(questionId));
  }
  
  public Answer findAnswer(Long answerId){
    Optional<Answer> findAnswer = answerRepository.findById(answerId);
    return findAnswer.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
  }
}
