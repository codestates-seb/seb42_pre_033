package _BE_Project.member.mapper;

import _BE_Project.member.dto.MemberDto;
import _BE_Project.member.entity.Member;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MemberMapper {
  Member memberPostDtoToMember(MemberDto.Post postDto);

  Member memberPatchDtoToMember(MemberDto.Patch patchDto);
  
  MemberDto.Response memberToMemberResponseDto(Member member);

  List<MemberDto.Response> membersToMemberResponseDtos(List<Member> members);
}
