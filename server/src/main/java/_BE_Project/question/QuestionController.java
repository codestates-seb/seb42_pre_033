package _BE_Project.question;

import _BE_Project.dto.MultiResponseDto;
import org.springframework.data.domain.Page;
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

        Question question = service.createQuestion(mapper.questionToQuestionPostDto(post));

        return new ResponseEntity(mapper.questionToQuestionResponseDto(question),HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable ("question-id") long questionId,
                                        @RequestBody QuestionDto.Patch patch) {

        patch.setQuestionId(questionId);
        Question question = service.updateQuestion(mapper.questionToQuestionPatchDto(patch));

        return new ResponseEntity(mapper.questionToQuestionResponseDto(question) ,HttpStatus.OK);

    }


    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable ("question-id") long questionId) {

        Question question = service.findQuestion(questionId);

        return new ResponseEntity(mapper.questionToQuestionResponseDto(question),HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity getQuestions (@RequestParam int page,
                                        @RequestParam int size) {

        Page<Question> pageQuestions = service.findQuestions(page -1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(new MultiResponseDto<>
                (mapper.questionToQuestionResponseDtos(questions), pageQuestions), HttpStatus.OK);
    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable ("question-id") long questionId) {

        service.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
