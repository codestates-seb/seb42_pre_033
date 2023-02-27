package _BE_Project.question;

import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.service.MemberService;
import _BE_Project.questionScore.service.QuestionScoreService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class QuestionService {
    
    private final QuestionRepository questionRepository;
    private final MemberService memberService;
    
    public Question createQuestion (Question question) {
        question.setMember(memberService.findByEmail());
        return questionRepository.save(question);
    }
    
    public Question updateQuestion (Question question) {
        memberService.findMember(question.getMember().getMemberId());
        Question findQuestion = findVerifyQuestion(question.getQuestionId());
        
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
    
    public void deleteQuestion (long questionId) {
        questionRepository.deleteById(questionId);
    }
    
    
    public Question findVerifyQuestion (long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);
        Question findQuestion = optionalQuestion.orElseThrow(()-> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));
        return findQuestion;
    }


}
