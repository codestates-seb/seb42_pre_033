package _BE_Project.question;

import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    QuestionEntity questionToQuestionPostDto (QuestionDto.Post post);

    QuestionEntity questionToQuestionPatchDto (QuestionDto.Patch patch);

    QuestionDto.Response questionToQuestionResponseDto (QuestionEntity question);

    List<QuestionDto.Response> questionToQuestionResponseDtos (List<QuestionEntity> questions);

    //커밋용 테스트
}
