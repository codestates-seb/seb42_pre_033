package _BE_Project.question;


import _BE_Project.Score.Score;
import _BE_Project.answer.dto.AnswerDtoV2;
import _BE_Project.answer.entity.Answer;
import _BE_Project.member.entity.Member;
import org.mapstruct.Mapper;
import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring")
public interface QuestionMapper {

    default Question questionToQuestionPostDto (QuestionDto.Post post) {
        Question question = new Question();
        Member member = new Member();
        Score score = new Score();
        member.setMemberId(post.getMemberId());

        question.setMember(member);
        question.setTitle(post.getTitle());
        question.setContent(post.getContent());

        return question;

    }

    default Question questionToQuestionPatchDto (QuestionDto.Patch patch) {
        Member member = new Member();
        Question question = new Question();
        member.setMemberId(patch.getMemberId());

        question.setMember(member);
        question.setQuestionId(patch.getQuestionId());
        question.setTitle(patch.getTitle());
        question.setContent(patch.getContent());

        return question;
    }

    default Question questionToQuestionDeleteDto (QuestionDto.Delete delete) {
        Member member = new Member();
        Question question = new Question();
        member.setMemberId(delete.getMemberId());

        question.setMember(member);
        question.setQuestionId(delete.getQuestionId());

        return question;
    }

    default QuestionDto.Response questionToQuestionResponseDto (Question question) {
        QuestionDto.Response response = new QuestionDto.Response();
        response.setMemberId(question.getMember().getMemberId());
        response.setQuestionId(question.getQuestionId());
        response.setTitle(question.getTitle());
        response.setContent(question.getContent());
        response.setCreateDate(question.getCreatedAt());
        response.setScore(question.getScore());
        response.setViewCnt(question.getViewCnt());
        response.setAnswers(answersToAnswerResponseDtos(question.getAnswer()));
        return response;
    };

    default List<AnswerDtoV2.Response> answersToAnswerResponseDtos(List<Answer> answers){
        return answers.stream().map( answer -> {
            AnswerDtoV2.Response responseDto = new AnswerDtoV2.Response();
            responseDto.setMemberId(answer.getMember().getMemberId());
            responseDto.setAnswerId(answer.getAnswerId());
            responseDto.setAnswerContent(answer.getAnswerContent());
            responseDto.setQuestionId(answer.getQuestion().getQuestionId());
            responseDto.setQuestionTitle(answer.getQuestion().getTitle());
            responseDto.setCreateDate(answer.getCreatedAt());
            responseDto.setScore(answer.getScore());
            responseDto.setAccepted(answer.getIsAccepted());


            return responseDto;
        }).collect(Collectors.toList());
    }

    List<QuestionDto.Response> questionToQuestionResponseDtos (List<Question> questions);
}
