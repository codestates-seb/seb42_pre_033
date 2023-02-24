package _BE_Project.member.controller;

import _BE_Project.dto.MultiResponseDto;
import _BE_Project.member.dto.MemberDto;
import _BE_Project.member.entity.Member;
import _BE_Project.member.mapper.MemberMapper;
import _BE_Project.member.service.MemberService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
  private final MemberService memberService;
  private final MemberMapper mapper;
  
  @PostMapping("/signup")
  public ResponseEntity<?> createMember(@Valid @RequestBody MemberDto.Post postDto){
    
    Member member = mapper.memberPostDtoToMember(postDto);
    Member savedMember = memberService.saveMember(member);
    
    return new ResponseEntity<>(mapper.memberToMemberResponseDto(savedMember), HttpStatus.CREATED);
  }
  
  @GetMapping("/mypage")
  ResponseEntity<?> getMyPage() {
    Member findMember = memberService.findByEmail();
    MemberDto.Response responseDto = mapper.memberToMemberResponseDto(findMember);
    return new ResponseEntity<>(responseDto, HttpStatus.OK);
  }
  
  
//  @GetMapping("/{id}")
//  public ResponseEntity<?> getMember(@PathVariable ("id") @Positive long memberId){
//    Member findMember = memberService.findMember(memberId);
//
//    return new ResponseEntity<>(mapper.memberToMemberResponseDto(findMember), HttpStatus.OK);
//  }
//
//  // 전체 회원을 불러올 수 있는 로직 추가 (사용여부는 확인요망)
//  @GetMapping
//  public ResponseEntity getMembers (@Positive @RequestParam int page,
//                                    @Positive @RequestParam int size) {
//    Page<Member> pageMembers = memberService.findMembers(page -1, size);
//    List<Member> members = pageMembers.getContent();
//
//    return new ResponseEntity<>(new MultiResponseDto(mapper.membersToMemberResponseDtos(members), pageMembers), HttpStatus.OK);
//  }


  @PatchMapping
  public ResponseEntity<?> updateMember(@RequestBody MemberDto.Patch patch) {
    memberService.updateMember(mapper.memberPatchDtoToMember(patch));

    return new ResponseEntity<>(HttpStatus.OK);
  }

  @DeleteMapping
  public ResponseEntity<?> deleteMember(){
    memberService.deleteMember();
    
    return new ResponseEntity<>(HttpStatus.NO_CONTENT);
  }
  @GetMapping("/logout")
  public ResponseEntity<?> logout(HttpServletRequest request){
    memberService.logout(request);
    return new ResponseEntity<>("successfully logged out.",HttpStatus.OK);
  }
}
