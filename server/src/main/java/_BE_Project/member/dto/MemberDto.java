package _BE_Project.member.dto;

import _BE_Project.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;

public class MemberDto {

    @AllArgsConstructor
    @Getter
    public static class Post {
        @Email
        private String email;
        @Range(min = 4, max = 20)
        private String password;
    }

    @Getter
    @Setter
    public static class Patch {
        private long memberId;
        private String email;
        private String password;


    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private long memberId;
        private String email;
        private Member.MemberStatus memberStatus;
        private LocalDateTime createDate;
    }
}
