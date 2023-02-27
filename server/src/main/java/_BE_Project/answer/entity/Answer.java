package _BE_Project.answer.entity;

import _BE_Project.answerScore.entity.AnswerScore;
import _BE_Project.audit.BaseTime;
import _BE_Project.member.entity.Member;
import _BE_Project.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Answer extends BaseTime{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    // 답변을 적을수 있는 칸
    @Column(columnDefinition = "Text")
    private String answerContent;

    @ManyToOne
    @JoinColumn(name="question_id")
    private Question question;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;
    
//    @OneToMany(mappedBy = "answer" , cascade = CascadeType.REMOVE, orphanRemoval = true)
//    private List<Score> likeMembers;
    
    @OneToMany(mappedBy = "answer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<AnswerScore> answerScores;
    
    @Column
    private Boolean isAccepted;
    
    @Column
    @ColumnDefault("0")
    private Integer score;


//    public MemberDto.owner getOwnerDto() {
//        Member member = this.member;
//        MemberDto.owner owner = new MemberDto.owner(member.getMemberId(), member.getNickname());
//        return owner;
//    }
    
    public void setMember(Member member) {
        if(this.member != null){
            member.getAnswers().remove(this);
        }
        this.member = member;
        member.getAnswers().add(this);
    }
    
    public void setQuestion(Question question) {
        if(this.question != null){
            question.getAnswer().remove(this);
        }
        this.question = question;
        question.getAnswer().add(this);
    }
}
