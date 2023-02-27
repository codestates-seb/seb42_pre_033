package _BE_Project.answerScore.entity;

import _BE_Project.answer.entity.Answer;
import _BE_Project.member.entity.Member;
import lombok.AccessLevel;
import lombok.Builder;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class AnswerScore {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(name = "answer_id")
    private Answer answer;
    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @Builder
    public AnswerScore(Answer answer, Member member) {
        setAnswer(answer);
        setMember(member);
    }

    public void setAnswer(Answer answer) {
        if (this.answer != null){
            this.answer.getAnswerScores().remove(this);
        }
        this.answer = answer;
        answer.getAnswerScores().add(this);
    }

    public void setMember(Member member) {
        this.member = member;
    }


}
