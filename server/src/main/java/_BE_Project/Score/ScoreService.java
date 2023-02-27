package _BE_Project.Score;

import org.springframework.stereotype.Service;

@Service
public class ScoreService {

//    private final ScoreRepository scoreRepository;
//
//    public ScoreService(ScoreRepository scoreRepository) {
//        this.scoreRepository = scoreRepository;
//    }
//    public Score findByUserAndAnswer(Member member, Answer answer) {
//        Optional<Score> score =
//                this.scoreRepository.findByUserAndAnswer(member.getMemberId(), answer.getAnswerId());
//        if (score.isPresent()) {
//            return score.get();
//        } else {
//            return new Score();
//        }
//    }
//
//    public Score findByUserAndQuestion (Member member, Question question) {
//        Optional<Score> score = this.scoreRepository.findByUserAndQuestion(member.getMemberId(), question.getQuestionId());
//        if (score.isPresent()) {
//            return score.get();
//        } else {
//            return new Score();
//        }
//    }
//
//    public void saveScore(Score score){
//        this.scoreRepository.save(score);
//    }
}
