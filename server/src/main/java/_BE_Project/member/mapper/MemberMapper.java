package _BE_Project.member.mapper;

import _BE_Project.answer.entity.Answer;
import _BE_Project.answer.dto.AnswerDto;
import _BE_Project.member.dto.MemberDto;
import _BE_Project.member.entity.Member;
import _BE_Project.question.Question;
import _BE_Project.question.QuestionDto;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

import java.util.List;
import java.util.stream.Collectors;

@Mapper(componentModel = "spring",unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
  Member memberPostDtoToMember(MemberDto.Post postDto);

  Member memberPatchDtoToMember(MemberDto.Patch patchDto);
  
  default MemberDto.Response memberToMemberResponseDto(Member member){
    MemberDto.Response memberResponseDto = new MemberDto.Response();
    memberResponseDto.setMemberId(member.getMemberId());
    memberResponseDto.setMemberStatus(member.getMemberStatus());
    memberResponseDto.setEmail(member.getEmail());
    memberResponseDto.setNickname(member.getNickname());
    memberResponseDto.setCreateDate(member.getCreatedAt());
    memberResponseDto.setQuestionResponseDtos(QuestionsTOQuestionResponseDtos(member.getQuestions()));
    memberResponseDto.setAnswerResponseDtos(answersToAnswerResponseDtos(member.getAnswers()));
    return memberResponseDto;
  };
  
  default List<QuestionDto.Response> QuestionsTOQuestionResponseDtos(List<Question> questions){
    return questions.stream().map( question -> {
      QuestionDto.Response responseDto = new QuestionDto.Response();
      responseDto.setQuestionId(question.getQuestionId());
      responseDto.setTitle(question.getTitle());
      responseDto.setContent(question.getContent());
      responseDto.setScore(question.getScore());
      responseDto.setViewCnt(question.getViewCnt());
      responseDto.setCreateDate(question.getCreatedAt());
      return responseDto;
    }).collect(Collectors.toList());
    
  }
  
  default List<AnswerDto.Response> answersToAnswerResponseDtos(List<Answer> answers){
    return answers.stream().map( answer -> {
      AnswerDto.Response responseDto = new AnswerDto.Response();
      responseDto.setAnswerId(answer.getAnswerId());
      responseDto.setScore(answer.getScore());
      responseDto.setAnswerContent(answer.getAnswerContent());
      responseDto.setCreateDate(answer.getCreatedAt());
      responseDto.setAccepted(answer.getIsAccepted());
      responseDto.setQuestionId(answer.getQuestion().getQuestionId());
      responseDto.setQuestionTitle(answer.getQuestion().getTitle());
      return responseDto;
    }).collect(Collectors.toList());
  }
  

  List<MemberDto.Response> membersToMemberResponseDtos(List<Member> members);
}
