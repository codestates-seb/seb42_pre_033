package _BE_Project.question;

import _BE_Project.Score.Score;
import _BE_Project.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionToQuestionPostDto (QuestionDto.Post post) {
        Question question = new Question();
        Member member = new Member();
        Score score = new Score();
        member.setMemberId(post.getMemberId());

        question.setTitle(post.getTitle());
        question.setContent(post.getContent());

        return question;

    }

    Question questionToQuestionPatchDto (QuestionDto.Patch patch);

    QuestionDto.Response questionToQuestionResponseDto (Question question);

    List<QuestionDto.Response> questionToQuestionResponseDtos (List<Question> questions);
}
