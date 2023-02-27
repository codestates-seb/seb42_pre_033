package _BE_Project.answer.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {

    @AllArgsConstructor
    @Getter
    public static class Post {
        @NotBlank
        private String answerContent;

        private String accessToken;

    }

    @Getter
    @Setter
    public static class Patch {
        private String answerContent;

        private String accessToken;

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
