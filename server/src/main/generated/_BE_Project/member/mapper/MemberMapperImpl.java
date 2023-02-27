package _BE_Project.member.mapper;

import _BE_Project.member.dto.MemberDto;
import _BE_Project.member.entity.Member;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-27T10:01:14+0900",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberDto.Post postDto) {
        if ( postDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( postDto.getEmail() );
        member.setNickname( postDto.getNickname() );
        member.setPassword( postDto.getPassword() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberDto.Patch patchDto) {
        if ( patchDto == null ) {
            return null;
        }

        Member member = new Member();

        member.setNickname( patchDto.getNickname() );
        member.setPassword( patchDto.getPassword() );

        return member;
    }

    @Override
    public List<MemberDto.Response> membersToMemberResponseDtos(List<Member> members) {
        if ( members == null ) {
            return null;
        }

        List<MemberDto.Response> list = new ArrayList<MemberDto.Response>( members.size() );
        for ( Member member : members ) {
            list.add( memberToMemberResponseDto( member ) );
        }

        return list;
    }
}
