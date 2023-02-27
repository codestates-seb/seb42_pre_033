package _BE_Project.answer.mapper;

import _BE_Project.answer.dto.AnswerDto;
import _BE_Project.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
  Answer answerPostDtoToAnswer (AnswerDto.Post postDto);
  
  Answer answerPatchDtoToAnswer (AnswerDto.Patch patchDto);
}
