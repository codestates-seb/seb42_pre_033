package _BE_Project.answer;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;
import _BE_Project.answer.AnswerDto;
@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    Answer answerPostDtoAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchDtoAnswer(AnswerDto.Patch answerPatchDto);
    default AnswerDto.Response answerToAnswerResponseDto(Answer answer){
        AnswerDto.Response response = new AnswerDto.Response(
                answer.getAnswerId(),
                answer.isAccepted(),
                answer.getQuestion().getQuestionId(),
                answer.getAnswerContent(),
                answer.getCreationDate(),
                answer.getScore()
        );
        return response;
    };
}