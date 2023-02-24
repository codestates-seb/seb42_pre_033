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
                answer.isAccepted(),
                answer.getScore(),
                answer.getAnswerId(),
                answer.getAnswerContent(),
                answer.getQuestion().getQuestionId(),
                answer.getOwnerDto() // 에러남
        );
        return response;
    };
}