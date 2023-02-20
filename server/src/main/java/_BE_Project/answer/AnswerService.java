package _BE_Project.answer;

import org.springframework.stereotype.Service;

@Service
public class AnswerService {
    private final AnswerRepository answerRepository;
    private final QuestionService questionService;
    private final ScoreService scoreService;

    public AnswerService(AnswerRepository answerRepository, QuestionService questionService, ScoreService scoreService) {
        this.answerRepository = answerRepository;
        this.questionService = questionService;
        this.scoreService = scoreService;
    }

    public Answer create(Long memberId,)
}
