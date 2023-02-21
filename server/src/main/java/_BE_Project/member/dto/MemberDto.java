package _BE_Project.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.validator.constraints.Range;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

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

    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private Long id;
        private String email;
    }
}
