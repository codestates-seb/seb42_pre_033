package _BE_Project.answer.service;

import _BE_Project.Score.ScoreService;
import _BE_Project.answer.entity.Answer;
import _BE_Project.answer.repository.AnswerRepository;
import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.DataNotFoundException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.MemberRepository;
import _BE_Project.question.Question;
import _BE_Project.question.QuestionService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final ScoreService scoreService;
    private final MemberRepository memberRepository;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService, ScoreService scoreService,
                         MemberRepository memberRepository) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.scoreService = scoreService;
        this.memberRepository = memberRepository;
    }

    public Answer createAnswer (Answer answer) {
        memberRepository.findById(answer.getMember().getMemberId());
        questionService.findQuestion(answer.getQuestion().getQuestionId());

        Answer saveAnswer = answerRepository.save(answer);

        return saveAnswer;
    }

    public Answer findById(Long id){
        return answerRepository.findById(id).orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));
    }

    public Answer updateAnswer(Long answerId, Answer answer){
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setAnswerContent(answer.getAnswerContent());
//        findAnswer.setModifiedAt(LocalDateTime.now());
        return answerRepository.save(findAnswer);
    }
    public Answer findVerifiedAnswer(Long answerId) {
        Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
        if(optionalAnswer.isPresent()){
            return optionalAnswer.get();
        } else{
            throw new DataNotFoundException("question not found");
        }

    }

    // 삭제 기능
    public void delete(Long answerId){
        Answer answer = findVerifiedAnswer(answerId);
        Question question = answer.getQuestion();

        answerRepository.delete(answer);
    }
//    // 추천 기능
//    public void upVote(Answer answer, Member member) {
//        Score score = scoreService.findByUserAndAnswer(member, answer);
//
//        if (score.getStatus()!=1){
//            score.setStatus(score.getStatus()+1);
//            answer.setScore(answer.getScore()+1);
//        }
//        score.setAnswer(answer);
//        score.setMember(member);
//        scoreService.saveScore(score);
//        answerRepository.save(answer);
//    }
//
//    // 비추천 기능
//    public void downVote(Answer answer, Member member) {
//        Score score = scoreService.findByUserAndAnswer(member, answer);
//
//        if (score.getStatus()!=-1){
//            score.setStatus(score.getStatus()-1);
//            answer.setScore(answer.getScore()-1);
//        }
//        score.setAnswer(answer);
//        score.setMember(member);
//        scoreService.saveScore(score);
//        answerRepository.save(answer);
//    }



}
