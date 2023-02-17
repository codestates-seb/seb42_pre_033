package _BE_Project.question;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/v1/question")
public class QuestionController {

    private final QuestionService service;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService service, QuestionMapper mapper) {
        this.service = service;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post post) {

        QuestionEntity question = service.createQuestion(mapper.questionToQuestionPostDto(post));

        return new ResponseEntity(mapper.questionToQuestionResponseDto(question),HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable ("question-id") long questionId,
                                        @RequestBody QuestionDto.Patch patch) {

        patch.setQuestionId(questionId);
        QuestionEntity question = service.updateQuestion(mapper.questionToQuestionPatchDto(patch));

        return new ResponseEntity(mapper.questionToQuestionResponseDto(question) ,HttpStatus.OK);

    }


    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable ("question-id") long questionId) {

        QuestionEntity question = service.findQuestion(questionId);

        return new ResponseEntity(mapper.questionToQuestionResponseDto(question),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions () {

        List<QuestionEntity> questions = service.findQuestions();

        return new ResponseEntity(mapper.questionToQuestionResponseDtos(questions), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable ("question-id") long questionId) {

        service.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
