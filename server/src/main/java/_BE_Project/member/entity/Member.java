package _BE_Project.member.entity;

import _BE_Project.answer.entity.Answer;
import _BE_Project.audit.BaseTime;
import _BE_Project.question.Question;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Member extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    private String email;

    private String nickname;

    @Column(name = "member_password")
    private String password;

    // 기본 상태값 지정
    @Enumerated(value = EnumType.STRING)
    @Column(nullable = false)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    // Question 영역과 미리 연관관계 매핑 해둠
    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<Question> questions = new ArrayList<>();

    public void setQuestion(Question question) {
        if(this.questions.contains(question)){
            this.questions.remove(question);
        }
        this.questions.add(question);
        if(question.getMember() != this) {
            question.setMember(this);
        }
    }

    // Answer 영역과 미리 연관관계 매핑 해둠
    @OneToMany(mappedBy = "member", cascade = CascadeType.PERSIST)
    private List<Answer> answers = new ArrayList<>();

    public void setAnswer(Answer answer) {
        this.answers.add(answer);
        if(answer.getMember() != this) {
            answer.setMember(this);
        }
    }

    @AllArgsConstructor
    @Getter
    public enum MemberStatus{
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");

        private String status;
    }
}
