package _BE_Project.member.mapper;

import _BE_Project.member.dto.MemberDto;
import _BE_Project.member.entity.Member;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface MemberMapper {
  Member memberPostDtoToMember(MemberDto.Post postDto);
  
  MemberDto.Response memberToMemberResponseDto(Member member);
}
