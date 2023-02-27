package _BE_Project.Score;

import _BE_Project.answer.Answer;
import _BE_Project.member.entity.Member;
import _BE_Project.question.Question;
import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import javax.swing.text.html.Option;
import java.util.Optional;
public interface ScoreRepository extends JpaRepository<Score,Long> {

//        @Query("select s from Score s where s.member_id = :memberId and s.question_id = :questionId " )
//        Optional<Score> findByMemberAndQuestion(@Param(value = "memberId")Long MemberId,
//                                         @Param(value = "questionId")Long questionId);
//        @Query("select s from Score s where s.member_id = :memberId and s.answer_id = :answerId " )
//        Optional<Score> findByMemberAndAnswer(@Param(value = "memberId") Long MemberId,
//                                        @Param(value = "answerId")Long answerId);
        Optional<Score> findByMemberAndQuestion(Member member, Question question);
        Optional<Score> findByMemberAndAnswer(Member member, Answer answer);
}
