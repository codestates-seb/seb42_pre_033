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
        private long memberId;
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
        //좋아요
        private int score;
        //조회수
        private int viewCnt;
    }
}
