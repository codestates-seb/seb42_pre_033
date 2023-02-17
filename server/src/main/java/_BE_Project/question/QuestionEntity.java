package _BE_Project.question;

import _BE_Project.audit.BaseTime;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.lang.reflect.Member;


@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class QuestionEntity extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void setMember(Member member) {
        this.member = member;
    }

    /*@OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<AnswerEntity> answer = new ArrayList<>();*/

    @Enumerated(EnumType.STRING)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_REGISTER;

    public enum QuestionStatus {
        QUESTION_REGISTER(1, "질문 등록"),
        QUESTION_CONFIRM(2, "응답 완료");

        @Getter
        private int stepNumber;

        @Getter
        private String stepDescription;

        QuestionStatus(int stepNumber, String stepDescription) {
            this.stepNumber = stepNumber;
            this.stepDescription = stepDescription;
        }
    }
}
