package _BE_Project.member.dto;

import _BE_Project.answer.dto.AnswerDtoV2;
import _BE_Project.member.entity.Member;
import _BE_Project.question.QuestionDto;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Length;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;
import java.util.List;

public class MemberDto {

    @Getter
    public static class Post {
        @NotBlank(message = "email 은 공백일 수 없습니다.")
        @Email(message = "유효하지 않은 이메일 형식입니다.")
        private String email;
        @NotBlank(message = "password 는 공백일 수 없습니다.")
        @Length(min = 4, max = 20, message = "password 길이는 최소 4자 이상 최대 20자 이하로 입력해 주세요.")
        private String password;
        @NotBlank(message = "nickname 은 공백일 수 없습니다.")
        @Length(min = 2, max = 10, message = "nickname 길이는 최소 2자 이상 최대 10자 이하로 입력해 주세요.")
        private String nickname;
    }

    @Getter
    public static class Patch {
        @NotBlank(message = "password 는 공백일 수 없습니다.")
        @Length(min = 4, max = 20, message = "password 길이는 최소 4자 이상 최대 20자 이하로 입력해 주세요.")
        private String password;
        @NotBlank(message = "nickname 은 공백일 수 없습니다.")
        @Length(min = 2, max = 10, message = "nickname 길이는 최소 2자 이상 최대 10자 이하로 입력해 주세요.")
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
        private List<AnswerDtoV2.Response> answerResponseDtos;
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
