package _BE_Project.question;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@AllArgsConstructor
@Getter
public class VoteDto {
    private Long voteId;
    private String voteEmail;
    private Long questionId;
    private int type;
}
