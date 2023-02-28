package _BE_Project.question;

import _BE_Project.answer.dto.AnswerDto;
import _BE_Project.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    
    default Question questionToQuestionPostDto (QuestionDto.Post post) {
        Question question = new Question();
//        Score score = new Score();
        
        question.setTitle(post.getTitle());
        question.setContent(post.getContent());
        
        return question;
        
    }
    
    Question questionToQuestionPatchDto (QuestionDto.Patch patch);
    
    default QuestionDto.Response questionToQuestionResponseDto (Question question) {
        QuestionDto.Response response = new QuestionDto.Response();
        response.setMemberId(question.getMember().getMemberId());
        response.setQuestionId(question.getQuestionId());
        response.setTitle(question.getTitle());
        response.setContent(question.getContent());
        response.setViewCnt(question.getViewCnt());
        response.setScore(question.getLikes().size());
        response.setCreateDate(question.getCreatedAt());
        response.setAnswers(answersToAnswerResponseDtos(question.getAnswer()));
        return response;
    };
    
    default List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers){
        return answers.stream().map( answer -> {
            AnswerDto.Response responseDto = new AnswerDto.Response();
            responseDto.setAnswerId(answer.getAnswerId());
            responseDto.setScore(answer.getLikes().size());
            responseDto.setAnswerContent(answer.getAnswerContent());
            responseDto.setCreateDate(answer.getCreatedAt());
            responseDto.setQuestionId(answer.getQuestion().getQuestionId());
            responseDto.setQuestionTitle(answer.getQuestion().getTitle());
            return responseDto;
        }).collect(Collectors.toList());
    }
    
    List<QuestionDto.Response> questionToQuestionResponseDtos (List<Question> questions);
}
