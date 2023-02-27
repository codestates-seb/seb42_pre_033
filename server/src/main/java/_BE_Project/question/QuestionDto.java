package _BE_Project.question;

import _BE_Project.answer.Answer;
import _BE_Project.answer.AnswerDto;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.util.List;

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
        private long memberId;
        private long questionId;
        private String title;
        private String content;
        private LocalDateTime createDate;
        //좋아요
        private int score;
        //조회수
        private int viewCnt;
        //질문에 해당하는 답변
        private List<AnswerDto.Response> answers;
    }
}
