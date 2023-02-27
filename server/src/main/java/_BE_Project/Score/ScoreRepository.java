package _BE_Project.Score;

import io.lettuce.core.dynamic.annotation.Param;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;


import java.util.Optional;
public interface ScoreRepository extends JpaRepository<Score,Long> {

//        @Query("select s from Score s where s.user_id = :userId and s.question_id = :questionId " )
//        Optional<Score> findByUserAndQuestion(@Param(value = "memberId")Long MemberId,
//                                         @Param(value = "questionId")Long questionId);
//        @Query("select s from Score s where s.member_id = :memberId and s.answer_id = :answerId " )
//        Optional<Score> findByUserAndAnswer(@Param(value = "memberId") Long MemberId,
//                                        @Param(value = "answerId")Long answerId);
}
