package _BE_Project.answer;

import lombok.AllArgsConstructor;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import _BE_Project.answer.AnswerDto;
@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    Answer answerPostDtoAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchDtoAnswer(AnswerDto.Patch answerPatchDto);

    default AnswerDto.Response answerToAnswerResponseDto(Answer answer){

        AnswerDto.Response response = new AnswerDto.Response();

        response.setAnswerId(answer.getAnswerId());
        response.setAnswerContent(answer.getAnswerContent());
        response.setQuestionId(answer.getQuestion().getQuestionId());
        response.setQuestionTitle(answer.getQuestion().getTitle());
        response.setCreateDate(answer.getCreationDate());
        response.setScore(answer.getScore());
        response.setAccepted(answer.isAccepted());

        return response;

    }
}