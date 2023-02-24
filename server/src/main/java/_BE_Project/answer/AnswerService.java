package _BE_Project.answer;

import _BE_Project.Score.Score;
import _BE_Project.Score.ScoreService;
import _BE_Project.exception.DataNotFoundException;
import _BE_Project.member.entity.Member;
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

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService, ScoreService scoreService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.scoreService = scoreService;
    }

    public Answer create(Long questionId, Answer answer, Member member){
        Question question = questionService.findQuestion(questionId);
        question.setViewCnt(question.getViewCnt()+1);
//        question.setAnswered(true);
        answer.setQuestion(question);
        answer.setAccepted(false);
        answer.setScore(0);
//        answer.setMember(member); // 왜 오류뜨는지모르겠음

        return answerRepository.save(answer);
    }

    public Answer findById(Long id){
        return this.answerRepository.findById(id).get();
    }

    public Answer updateAnswer(Long answerId, Answer answer){
        Answer findAnswer = findVerifiedAnswer(answerId);
        findAnswer.setAnswerContent(answer.getAnswerContent());
        findAnswer.setModifiedAt(LocalDateTime.now());
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
        question.setViewCnt(answer.getQuestion().getViewCnt()-1);
        if (question.getViewCnt()==0){
            question.setAnswered(false);
        }
        answerRepository.delete(answer);
    }
    // 추천 기능
    public void upVote(Answer answer, Member member) {
        Score score = scoreService.findByUserAndAnswer(member, answer);

        if (score.getStatus()!=1){
            score.setStatus(score.getStatus()+1);
            answer.setScore(answer.getScore()+1);
        }
        score.setAnswer(answer);
        score.setMember(member);
        scoreService.saveScore(score);
        answerRepository.save(answer);
    }

    // 비추천 기능
    public void downVote(Answer answer, Member member) {
        Score score = scoreService.findByUserAndAnswer(member, answer);

        if (score.getStatus()!=-1){
            score.setStatus(score.getStatus()-1);
            answer.setScore(answer.getScore()-1);
        }
        score.setAnswer(answer);
        score.setMember(member);
        scoreService.saveScore(score);
        answerRepository.save(answer);
    }



}
