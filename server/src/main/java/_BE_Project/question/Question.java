package _BE_Project.question;

import _BE_Project.Score.Score;
import _BE_Project.audit.BaseTime;
import _BE_Project.member.entity.Member;
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
public class Question extends BaseTime {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long questionId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column
    private boolean isAnswered; // 질문 등록자가 맞는지 안맞는지


    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    public void setMember(Member member) {
        this.member = member;
    }

    /*@OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<AnswerEntity> answer = new ArrayList<>();*/

    /*@OneToMany(mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<VoteEntity> votes = new ArrayList<>();*/

    @OneToMany (mappedBy = "question", cascade = CascadeType.PERSIST)
    private List<Score> scores = new ArrayList<>();


    @Column(columnDefinition = "integer default 0", nullable = false)
    private int viewCnt;


    @Enumerated(EnumType.STRING)
    private QuestionStatus questionStatus = QuestionStatus.QUESTION_REGISTER;

    public enum QuestionStatus {
        QUESTION_REGISTER(1, "질문 등록"),
        QUESTION_CONFIRM(2, "응답 완료"),
        QUESTION_DELETE(3, "질문 삭제");

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
