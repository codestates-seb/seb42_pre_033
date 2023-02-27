package _BE_Project.question;

import _BE_Project.Score.ScoreService;
import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.service.MemberService;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class QuestionService {

    private final QuestionRepository questionRepository;
    private final MemberService memberService;

    private final ScoreService scoreService;

    public QuestionService(QuestionRepository questionRepository,
                           MemberService memberService, ScoreService scoreService) {
        this.questionRepository = questionRepository;
        this.memberService = memberService;
        this.scoreService = scoreService;
    }

    public Question createQuestion (Question question) {
        memberService.findMember(question.getMember().getMemberId());
        Question saveQuestion = questionRepository.save(question);
        question.setScore(0);

        return saveQuestion;
    }

    public Question updateQuestion (Question question) {
        Question findQuestion = findVerifyQuestion(question.getQuestionId());
        Member member = memberService.findMember(question.getMember().getMemberId());

        if (member != findQuestion.getMember()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_EQUAL);
        }

        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));

        return questionRepository.save(findQuestion);
    }

    public Question findQuestion (long questionId) {

        Question findQuestion = findVerifyQuestion(questionId);

        //질문 조회수 증가
        questionRepository.increaseViewCnt(questionId);

        return findQuestion;
    }

    public Page<Question> findQuestions(int page, int size) {
        return questionRepository.findAll(PageRequest.of(page, size, Sort.by("questionId").descending()));
    }

    @Transactional
    public Page<Question> searchQuestion (String keyword, int page, int size) {
        Page<Question> questions = questionRepository.findByTitleContaining(keyword, PageRequest.of(page, size, Sort.by("questionId").descending()));
        return questions;
    }

    public Question deleteQuestion (Question question) {
        Question findQuestion = findVerifyQuestion(question.getQuestionId());
        Member member = memberService.findMember(question.getMember().getMemberId());

        if (member != findQuestion.getMember()) {
            throw new BusinessLogicException(ExceptionCode.MEMBER_NOT_EQUAL);
        }

        if (question.getAnswer() != null) {
            question.getAnswer().clear();
        }

        questionRepository.delete(findQuestion);

        return findQuestion;
    }


    public Question findVerifyQuestion (long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()-> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }
}
