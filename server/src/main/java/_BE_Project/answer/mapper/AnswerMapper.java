package _BE_Project.answer.mapper;


import _BE_Project.answer.dto.AnswerDtoV2;
import _BE_Project.answer.entity.Answer;
import _BE_Project.member.entity.Member;
import _BE_Project.question.Question;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface AnswerMapper {
    default Answer answerPostDtoAnswer(AnswerDtoV2.Post answerPostDto) {
        Member member = new Member();
        Question question = new Question();
        Answer answer = new Answer();

        member.setMemberId(answerPostDto.getMemberId());
        question.setQuestionId(answerPostDto.getQuestionId());

        answer.setMember(member);
        answer.setQuestion(question);

        answer.setAnswerContent(answerPostDto.getAnswerContent());

        return answer;

    };

    default AnswerDtoV2.Response answerToAnswerResponseDto (Answer answer) {
        AnswerDtoV2.Response response = new AnswerDtoV2.Response();
        response.setMemberId(answer.getMember().getMemberId());
        response.setQuestionId(answer.getQuestion().getQuestionId());
        response.setAnswerId(answer.getAnswerId());
        response.setAnswerContent(answer.getAnswerContent());
        response.setQuestionTitle(answer.getQuestion().getTitle());
        response.setCreateDate(answer.getCreatedAt());
        response.setScore(answer.getScore());
        response.setAccepted(answer.getIsAccepted());
        return response;
    };


    Answer answerPatchDtoAnswer(AnswerDtoV2.Patch answerPatchDto);

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