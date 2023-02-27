package _BE_Project.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDtoV2 {

    @Getter
    @Setter
    public static class Post {
        private Long questionId;
        @NotBlank(message = "answerContent 는 공백일 수 없습니다.")
        private String answerContent;
    }

    @Getter
    @Setter
    public static class Patch {
        private String answerContent;

    }

    @Getter
    @Setter
    public static class Response{

        private Long answerId;
        private String answerContent;
        private Long questionId;
        private String questionTitle;
        private LocalDateTime createDate;
        private int score;
        private boolean isAccepted;
        
    }
}
