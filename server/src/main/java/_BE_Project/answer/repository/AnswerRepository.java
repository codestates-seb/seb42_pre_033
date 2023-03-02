package _BE_Project.answer.repository;

import _BE_Project.answer.entity.Answer;
import _BE_Project.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerRepository extends JpaRepository<Answer, Long> {
}
