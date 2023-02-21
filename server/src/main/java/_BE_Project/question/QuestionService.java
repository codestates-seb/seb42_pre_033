package _BE_Project.question;

import _BE_Project.member.repository.MemberRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
public class QuestionService {

    private final QuestionRepository repository;
    private final MemberRepository memberRepository;

    public QuestionService(QuestionRepository repository,
                           MemberRepository memberRepository) {
        this.repository = repository;
        this.memberRepository = memberRepository;
    }

    public Question createQuestion (Question question) {

        Question saveQuestion = repository.save(question);

        return saveQuestion;
    }

    public Question updateQuestion (Question question) {
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

    public void deleteQuestion (long questionId) {
        repository.deleteById(questionId);
    }

    private Question findVerifyQuestion (long questionId) {
        Optional<Question> optionalQuestion = repository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow();
        return findQuestion;
    }


}
