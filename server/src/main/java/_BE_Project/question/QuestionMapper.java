package _BE_Project.question;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    Question questionToQuestionPostDto (QuestionDto.Post post);

    Question questionToQuestionPatchDto (QuestionDto.Patch patch);

    QuestionDto.Response questionToQuestionResponseDto (Question question);

    List<QuestionDto.Response> questionToQuestionResponseDtos (List<Question> questions);
}
