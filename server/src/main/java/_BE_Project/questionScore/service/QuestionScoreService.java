package _BE_Project.questionScore.service;

import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.service.MemberService;
import _BE_Project.question.Question;
import _BE_Project.question.QuestionService;
import _BE_Project.questionScore.entity.QuestionScore;
import _BE_Project.questionScore.repository.QuestionScoreRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class QuestionScoreService {
    private final QuestionScoreRepository questionScoreRepository;
    private final MemberService memberService;
    private final QuestionService questionService;
    public void increaseScore(Long questionId){
        Member member = memberService.findByEmail();
        Question question = questionService.findVerifyQuestion(questionId);
        QuestionScore questionScore = QuestionScore.builder().question(question).member(member).build();

        if(questionScoreRepository.findByMemberAndQuestion(member, question).isPresent()) {
            throw new BusinessLogicException(ExceptionCode.QUESTION_SCORE_EXISTS);
        }
        questionScoreRepository.save(questionScore);
    }
    @Transactional
    public void decreaseScore(Long questionId){
        Member member = memberService.findByEmail();
        Question question = questionService.findVerifyQuestion(questionId);

        questionScoreRepository.findByMemberAndQuestion(member, question)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_SCORE_NOT_FOUND));

        questionScoreRepository.deleteByMemberAndQuestion(member, question);
    }

}
