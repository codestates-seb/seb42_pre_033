package _BE_Project.question;

import _BE_Project.Score.ScoreService;
import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.MemberRepository;
import _BE_Project.member.service.MemberService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Transactional
@Service
public class QuestionService {

    private final QuestionRepository repository;
    private final MemberService memberService;

    private final ScoreService scoreService;

    public QuestionService(QuestionRepository repository,
                           MemberService memberService, ScoreService scoreService) {
        this.repository = repository;
        this.memberService = memberService;
        this.scoreService = scoreService;
    }

    public Question createQuestion (Question question) {
        memberService.findMember(question.getMember().getMemberId());
        Question saveQuestion = repository.save(question);
        question.setScore(0);

        return saveQuestion;
    }

    public Question updateQuestion (Question question) {
        memberService.findMember(question.getMember().getMemberId());
        Question findQuestion = findVerifyQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));

        return repository.save(findQuestion);
    }

    public Question findQuestion (long questionId) {

        Question findQuestion = findVerifyQuestion(questionId);

        //질문 조회수 증가
        repository.increaseViewCnt(questionId);

        return findQuestion;
    }

    public Page<Question> findQuestions(int page, int size) {
        return repository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    @Transactional
    public Page<Question> searchQuestion (String keyword, Pageable pageable) {
        Page<Question> questionList = repository.findByTitleContaining(keyword, pageable);
        return questionList;
    }

    public void deleteQuestion (long questionId) {
        repository.deleteById(questionId);
    }
    
    public Question findVerifyQuestion (long questionId) {
        Optional<Question> optionalQuestion = repository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()-> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }


}
