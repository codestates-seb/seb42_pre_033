package _BE_Project.question;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-26T16:02:18+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class QuestionMapperImpl implements QuestionMapper {

    @Override
    public Question questionToQuestionPostDto(QuestionDto.Post post) {
        if ( post == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( post.getQuestionId() );
        question.setTitle( post.getTitle() );
        question.setContent( post.getContent() );

        return question;
    }

    @Override
    public Question questionToQuestionPatchDto(QuestionDto.Patch patch) {
        if ( patch == null ) {
            return null;
        }

        Question question = new Question();

        question.setQuestionId( patch.getQuestionId() );
        question.setTitle( patch.getTitle() );
        question.setContent( patch.getContent() );

        return question;
    }

    @Override
    public QuestionDto.Response questionToQuestionResponseDto(Question question) {
        if ( question == null ) {
            return null;
        }

        QuestionDto.Response response = new QuestionDto.Response();

        response.setQuestionId( question.getQuestionId() );
        response.setTitle( question.getTitle() );
        response.setContent( question.getContent() );
        response.setScore( question.getScore() );
        response.setViewCnt( question.getViewCnt() );

        return response;
    }

    @Override
    public List<QuestionDto.Response> questionToQuestionResponseDtos(List<Question> questions) {
        if ( questions == null ) {
            return null;
        }

        List<QuestionDto.Response> list = new ArrayList<QuestionDto.Response>( questions.size() );
        for ( Question question : questions ) {
            list.add( questionToQuestionResponseDto( question ) );
        }

        return list;
    }
}
