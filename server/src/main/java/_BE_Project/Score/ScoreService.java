package _BE_Project.Score;

import _BE_Project.answer.Answer;
import _BE_Project.member.entity.Member;
import _BE_Project.question.Question;

import org.springframework.stereotype.Service;

import java.util.Optional;
@Service
public class ScoreService {

    private final ScoreRepository scoreRepository;

    public ScoreService(ScoreRepository scoreRepository) {
        this.scoreRepository = scoreRepository;
    }
    public Score findByMemberAndAnswer(Member member, Answer answer) {
        Optional<Score> score =
                this.scoreRepository.findByMemberAndAnswer(member, answer);
        if (score.isPresent()) {
            return score.get();
        } else {
            return new Score();
        }
    }

    public Score findByMemberAndQuestion (Member member, Question question) {
        Optional<Score> score = this.scoreRepository.findByMemberAndQuestion(member, question);
        if (score.isPresent()) {
            return score.get();
        } else {
            return new Score();
        }
    }

    public void saveScore(Score score){
        this.scoreRepository.save(score);
    }
}
