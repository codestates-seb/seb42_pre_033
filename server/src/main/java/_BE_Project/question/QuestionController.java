package _BE_Project.question;

import _BE_Project.dto.ResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/questions")
public class QuestionController {
    private final QuestionService questionService;
    private final QuestionMapper mapper;

    public QuestionController(QuestionService questionService, QuestionMapper mapper) {
        this.questionService = questionService;
        this.mapper = mapper;
    }

    @PostMapping
    public ResponseEntity postQuestion(@RequestBody QuestionDto.Post post) {

        Question savedQuestion = questionService.createQuestion(mapper.questionToQuestionPostDto(post));

        return new ResponseEntity(
                ResponseDto.success(mapper.questionToQuestionResponseDto(savedQuestion).getQuestionId(), "질문이 정상적으로 생성 되었습니다.", HttpStatus.CREATED),
                HttpStatus.CREATED);
    }

    @PatchMapping("/{question-id}")
    public ResponseEntity patchQuestion(@PathVariable ("question-id") long questionId,
                                        @RequestBody QuestionDto.Patch patch) {

        patch.setQuestionId(questionId);
        Question question = questionService.updateQuestion(mapper.questionToQuestionPatchDto(patch));


        return new ResponseEntity(
                ResponseDto.success(null, "질문이 정상적으로 수정 되었습니다.", HttpStatus.OK),
                HttpStatus.OK);

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

        return new ResponseEntity(
                ResponseDto.success(null, "질문이 정상적으로 삭제 되었습니다.", HttpStatus.NO_CONTENT),
                HttpStatus.NO_CONTENT);
    }


}
