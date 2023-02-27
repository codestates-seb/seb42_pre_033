package _BE_Project.answer.mapper;

import _BE_Project.answer.dto.AnswerDto;
import _BE_Project.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    Answer answerPostDtoAnswer(AnswerDto.Post answerPostDto);
    Answer answerPatchDtoAnswer(AnswerDto.Patch answerPatchDto);

//    default AnswerDto.Response answerToAnswerResponseDto(Answer answer){
//
//        AnswerDto.Response response = new AnswerDto.Response();
//
//        response.setAnswerId(answer.getAnswerId());
//        response.setAnswerContent(answer.getAnswerContent());
//        response.setQuestionId(answer.getQuestion().getQuestionId());
//        response.setQuestionTitle(answer.getQuestion().getTitle());
//        response.setCreationDate(answer.getCreationDate());
//        response.setScore(answer.getScore());
//        response.setAccepted(answer.isAccepted());
//
//        return response;
//
//    }
}