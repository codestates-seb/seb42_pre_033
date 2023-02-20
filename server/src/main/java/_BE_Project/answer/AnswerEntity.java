package _BE_Project.answer;

import _BE_Project.member.MemberEntity;
import _BE_Project.question.QuestionEntity;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class AnswerEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long answerId;

    // 답변을 적을수 있는 칸
    @Column(nullable = false, columnDefinition = "Text")
    private String answerContent;

    @ManyToOne
    @JoinColumn(name="question_id")
    private QuestionEntity questionEntity;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private MemberEntity memberEntity;

    //
    @Column
    private boolean isAccepted;

    // 좋아요의 개수
    @Column
    private int score;

    // 답변을 달았을 때 시간을 알려주는 코드
    @Column(nullable = false)
    private LocalDateTime creationDate = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime modifiedAt = LocalDateTime.now();

    @OneToMany(mappedBy = "answer" , cascade = CascadeType.REMOVE, orphanRemoval = true)
    private List<Score> likeUsers;

    public MemberDto.owner getOwner() {
        MemberEntity memberEntity = this.member;
        MemberDto.owner = new MemberDto.owner(member.getMemberId(), )
        return owner;
    }


    }

}
