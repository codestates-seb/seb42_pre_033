package _BE_Project.question;

import _BE_Project.dto.MultiResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/v1/question")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post post) {

        String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Question question = questionService.createQuestion(mapper.questionToQuestionPostDto(post));

        return new ResponseEntity(mapper.questionToQuestionResponseDto(question),HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable ("question-id") long questionId,
                                        @RequestBody QuestionDto.Patch patch) {

        patch.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionToQuestionPatchDto(patch));

        return new ResponseEntity(mapper.questionToQuestionResponseDto(question) ,HttpStatus.OK);

    }

    @GetMapping("/{question-id}")
    public ResponseEntity getQuestion(@PathVariable ("question-id") long questionId) {

        Question question = questionService.findQuestion(questionId);

        return new ResponseEntity(mapper.questionToQuestionResponseDto(question),HttpStatus.OK);
    }

    // 질문 검색로직 (MultiResponseDto 미적용 / param 형태로 값 받음)
    @GetMapping("/search")
    public ResponseEntity searchQuestion (@RequestParam("q") String keyword,
                                          @RequestParam int page, @RequestParam int size) {
        Page<Question> searchQuestions = questionService.searchQuestion(keyword, page-1, size);
        List<Question> questions = searchQuestions.getContent();

        return new ResponseEntity(mapper.questionToQuestionResponseDtos(questions), HttpStatus.OK);

    }

    // 전체 질문 조회 로직 (MultiResponseDto 미적용)
    @GetMapping
    public ResponseEntity getQuestions (@Positive @RequestParam int page,
                                        @Positive @RequestParam int size) {

        Page<Question> pageQuestions = questionService.findQuestions(page -1, size);
        List<Question> questions = pageQuestions.getContent();

        return new ResponseEntity<>(mapper.questionToQuestionResponseDtos(questions), HttpStatus.OK);
    }



//    @GetMapping
//    public ResponseEntity getQuestions (@RequestParam int page,
//                                        @RequestParam int size) {
//
//        Page<Question> pageQuestions = service.findQuestions(page -1, size);
//        List<Question> questions = pageQuestions.getContent();
//
//        return new ResponseEntity<>(new MultiResponseDto<>
//                (mapper.questionToQuestionResponseDtos(questions), pageQuestions), HttpStatus.OK);
//    }

    @DeleteMapping("/{question-id}")
    public ResponseEntity deleteQuestion(@PathVariable ("question-id") long questionId) {

        questionService.deleteQuestion(questionId);

        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }


}
