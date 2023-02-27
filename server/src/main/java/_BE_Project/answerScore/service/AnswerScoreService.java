package _BE_Project.answerScore.service;

import _BE_Project.answer.entity.Answer;
import _BE_Project.answer.service.AnswerService;
import _BE_Project.answerScore.entity.AnswerScore;
import _BE_Project.answerScore.repository.AnswerScoreRepository;
import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnswerScoreService {
    private final AnswerScoreRepository repository;
    private final MemberService memberService;
    private final AnswerService answerService;
    public void increaseScore(Long answerId){
        Member member = memberService.findByEmail();
        Answer answer = answerService.findById(answerId);
        AnswerScore answerScore = AnswerScore.builder().answer(answer).member(member).build();

        if(repository.findByMemberAndAnswer(member, answer).isPresent()) {
            throw new BusinessLogicException(ExceptionCode.ANSWER_SCORE_EXISTS);
        }
        repository.save(answerScore);
    }

    public void decreaseScore(Long answerId){
        Member member = memberService.findByEmail();
        Answer answer = answerService.findById(answerId);

        repository.findByMemberAndAnswer(member, answer)
                .orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_SCORE_NOT_FOUND));

        repository.deleteByMemberAndAnswer(member, answer);
    }

}
