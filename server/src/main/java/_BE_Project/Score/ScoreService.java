package _BE_Project.Score;

import _BE_Project.answer.Answer;

import java.lang.reflect.Member;
import java.util.Optional;

public class ScoreService {

    private final ScoreRepository scoreRepository;

    public ScoreService(ScoreRepository scoreRepository) {
        this.scoreRepository = scoreRepository;
    }
    public Score findByUserAndAnswer(Member member, Answer answer) {
        Optional<Score> score =
                this.scoreRepository.findByUserAndAnswer(member, answer);
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
