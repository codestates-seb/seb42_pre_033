package _BE_Project.question;

import org.springframework.stereotype.Service;

import javax.swing.text.html.Option;
import java.util.List;
import java.util.Optional;

@Service
public class QuestionService {

    private final QuestionRepository repository;

    public QuestionService(QuestionRepository repository) {
        this.repository = repository;
    }

    public QuestionEntity createQuestion (QuestionEntity question) {

        QuestionEntity saveQuestion = repository.save(question);

        return saveQuestion;
    }

    public QuestionEntity updateQuestion (QuestionEntity question) {
        QuestionEntity findQuestion = findVerifyQuestion(question.getQuestionId());

        Optional.ofNullable(question.getTitle()).ifPresent(title -> findQuestion.setTitle(title));
        Optional.ofNullable(question.getContent()).ifPresent(content -> findQuestion.setContent(content));

        return repository.save(findQuestion);
    }

    public QuestionEntity findQuestion (long questionId) {
        QuestionEntity findQuestion = findVerifyQuestion(questionId);
        return findQuestion;
    }

    public List<QuestionEntity> findQuestions() {
        List<QuestionEntity> findQuestions = repository.findAll();
        return findQuestions;
    }

    public void deleteQuestion (long questionId) {
        repository.deleteById(questionId);
    }

    private QuestionEntity findVerifyQuestion (long questionId) {
        Optional<QuestionEntity> optionalQuestion = repository.findById(questionId);
        QuestionEntity findQuestion = optionalQuestion.orElseThrow();
        return findQuestion;
    }
}
