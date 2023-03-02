package _BE_Project.answer.mapper;

import _BE_Project.answer.dto.AnswerDto;
import _BE_Project.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    default Answer answerPostDtoToAnswer (AnswerDto.Post postDto) {
        Answer answer = new Answer();

        answer.setAnswerContent(postDto.getAnswerContent());
        return answer;
    };

    default Answer answerPatchDtoToAnswer (AnswerDto.Patch patchDto) {
        Answer answer = new Answer();

        answer.setAnswerContent(patchDto.getAnswerContent());
        return answer;
    };

    default AnswerDto.Response answerToAnswerResponseDto (Answer answer) {
        AnswerDto.Response response = new AnswerDto.Response();
        response.setMemberId(answer.getMember().getMemberId());
        response.setNickname(answer.getMember().getNickname());
        response.setAnswerId(answer.getAnswerId());
        response.setAnswerContent(answer.getAnswerContent());
        response.setQuestionId(answer.getQuestion().getQuestionId());
        response.setScore(answer.getLikes().size());
        response.setCreateDate(answer.getCreatedAt());
        return response;
    }
}
