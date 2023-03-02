package _BE_Project.answer.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

public class AnswerDto {

    @Getter
    @Setter
    public static class Post {
        @NotBlank(message = "answerContent 는 공백일 수 없습니다.")
        private String answerContent;
    }

    @Getter
    @Setter
    public static class Patch {
        @NotBlank(message = "answerContent 는 공백일 수 없습니다.")
        private String answerContent;

    }

    @Getter
    @Setter
    public static class Response{
        private Long memberId;
        private Long answerId;
        private String nickname;
        private String answerContent;
        private Long questionId;
        private String questionTitle;
        private LocalDateTime createDate;
        private int score;
    }
}
