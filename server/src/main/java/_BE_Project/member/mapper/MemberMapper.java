package _BE_Project.member.mapper;

import _BE_Project.answer.dto.AnswerDtoV2;
import _BE_Project.answer.entity.Answer;
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

  default List<AnswerDtoV2.Response> answersToAnswerResponseDtos(List<Answer> answers){
    return answers.stream().map( answer -> {
      AnswerDtoV2.Response responseDto = new AnswerDtoV2.Response();
      responseDto.setMemberId(answer.getMember().getMemberId());
      responseDto.setAnswerId(answer.getAnswerId());
      responseDto.setAnswerContent(answer.getAnswerContent());
      responseDto.setQuestionId(answer.getQuestion().getQuestionId());
      responseDto.setQuestionTitle(answer.getQuestion().getTitle());
      responseDto.setCreateDate(answer.getCreatedAt());
      responseDto.setScore(answer.getScore());
      responseDto.setAccepted(answer.getIsAccepted());


      return responseDto;
    }).collect(Collectors.toList());
  }


  List<MemberDto.Response> membersToMemberResponseDtos(List<Member> members);
}
