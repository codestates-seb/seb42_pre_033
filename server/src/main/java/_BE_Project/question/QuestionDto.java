package _BE_Project.question;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;

public class QuestionDto {

    @AllArgsConstructor
    @Getter
    public static class Post {
        private long questionId;
        private String title;
        private String content;
    }

    @Getter
    @Setter
    public static class Patch {
        private long questionId;
        private String title;
        private String content;
    }

    @Getter
    @Setter
    public static class Response {
        private long questionId;
        private String title;
        private String content;
        private LocalDateTime createDate;
        private int score;
        //조회수 관련 필드 추가
        private int viewCnt;
    }
}
