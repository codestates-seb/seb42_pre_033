package _BE_Project.answerScore.repository;

import _BE_Project.answer.entity.Answer;
import _BE_Project.answerScore.entity.AnswerScore;
import _BE_Project.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerScoreRepository extends JpaRepository<AnswerScore, Long> {
  Optional<AnswerScore> findByMemberAndAnswer(Member member, Answer answer);
  void deleteByMemberAndAnswer(Member member, Answer answer);
  
//  boolean existsByMemberAndAnswer(Member member, Answer answer);

}
