package _BE_Project.member.dto;

import _BE_Project.answer.AnswerDto;
import _BE_Project.member.entity.Member;
import _BE_Project.question.QuestionDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.util.List;

public class MemberDto {

    @AllArgsConstructor
    @Getter
    public static class Post {
        @Email
        private String email;
        @Range(min = 4, max = 20)
        private String password;
        @NotBlank
        private String nickname;
    }

    @Getter
    @Setter
    public static class Patch {
        private long memberId;
        private String password;
        private String nickname;


    }

    
    @Getter
    @Setter
    public static class Response {
        private long memberId;
        private String email;
        private String nickname;
        private Member.MemberStatus memberStatus;
        private List<QuestionDto.Response> questionResponseDtos;
        private List<AnswerDto.Response> answerResponseDtos;
        private LocalDateTime createDate;
    }

    @Getter
    public static class owner{
        private Long memberId;
        private String nickname;

        public owner(Long memberId, String nickname) {
            this.memberId = memberId;
            this.nickname = nickname;
        }
    }
}
