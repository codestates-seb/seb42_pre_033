package _BE_Project.questionScore.entity;

import _BE_Project.answer.entity.Answer;
import _BE_Project.member.entity.Member;
import _BE_Project.question.Question;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class QuestionScore {
  
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;
  @ManyToOne
  @JoinColumn(name = "member_id")
  private Member member;
  
  @ManyToOne
  @JoinColumn(name = "question_id")
  private Question question;
  
  @Builder
  public QuestionScore(Question question, Member member) {
    setQuestion(question);
    setMember(member);
  }
  
  public void setQuestion(Question question) {
    if(this.question != null){
      this.question.getLikes().remove(this);
    }
    this.question = question;
    
    question.getLikes().add(this);
  }
  
  public void setMember(Member member) {
    this.member = member;
  }


}
