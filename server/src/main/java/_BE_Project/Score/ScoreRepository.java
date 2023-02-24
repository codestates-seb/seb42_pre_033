package _BE_Project.Score;

import _BE_Project.answer.Answer;
import _BE_Project.member.entity.Member;
import _BE_Project.question.Question;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ScoreRepository extends JpaRepository<Score,Long> {
    //    @Query("select s from Score s where s.user_id = :userId and s.question_id = :questionId " )
//    Optional<Score> findByUserAndQuestion(@Param(value = "userId")Long userId,
//                                         @Param(value = "questionId")Long questionId);
    Optional<Score> findByUserAndQuestion(Member member, Question question);
    Optional<Score> findByUserAndAnswer(Member member, Answer answer);
}
