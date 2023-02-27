package _BE_Project.answer.mapper;

import _BE_Project.answer.dto.AnswerDtoV2;
import _BE_Project.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface AnswerMapperV2 {
  @Mapping(source = "questionId", target = "question.questionId")
  Answer answerPostDtoToAnswer (AnswerDtoV2.Post postDto);
}
