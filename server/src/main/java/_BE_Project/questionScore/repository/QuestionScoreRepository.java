package _BE_Project.questionScore.repository;

import _BE_Project.member.entity.Member;
import _BE_Project.question.Question;
import _BE_Project.questionScore.entity.QuestionScore;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionScoreRepository extends JpaRepository<QuestionScore, Long> {
  Optional<QuestionScore> findByMemberAndQuestion(Member member, Question question);
  void deleteByMemberAndQuestion(Member member, Question question);
  
//  boolean existsByMemberAndAnswer(Member member, Answer answer);

}
