package _BE_Project.question;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface QuestionRepository extends JpaRepository<Question, Long> {

    @Modifying
    @Query("update Question q set q.viewCnt = q.viewCnt + 1 where q.questionId = :questionId")
    int increaseViewCnt(@Param ("questionId") Long questionId);

}
