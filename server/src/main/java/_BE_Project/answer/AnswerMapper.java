package _BE_Project.answer;

import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    AnswerEntity answerPostDtoAnswer(AnswerDto.Post answerPostDto);
    AnswerEntity answerPatchDtoAnswer(AnswerDto.Patch answerPatchDto);
    default AnswerDto.Response answerToAnswerResponseDto(AnswerEntity answerEntity){
        AnswerDto.Response response = new AnswerDto.Response(
                answerEntity.isAccepted(),
                answerEntity.getScore(),
                answerEntity.getCreationDate(),
                answerEntity.getAnswerId(),
                answerEntity.getAnswerContent(),
                answerEntity.getQuestionEntity().getQuestionId(),
                answerEntity.getMemberDto()
        );
        return response;
    };
}