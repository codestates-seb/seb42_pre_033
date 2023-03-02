package _BE_Project.member.controller;

import _BE_Project.dto.ResponseDto;
import _BE_Project.member.dto.MemberDto;
import _BE_Project.member.entity.Member;
import _BE_Project.member.mapper.MemberMapper;
import _BE_Project.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@RestController
@RequestMapping("/members")
@RequiredArgsConstructor
public class MemberController {
  private final MemberService memberService;
  private final MemberMapper mapper;

  @PostMapping("/signup")
  public ResponseEntity<?> createMember(@Valid @RequestBody MemberDto.Post postDto){

    Member member = mapper.memberPostDtoToMember(postDto);
    memberService.saveMember(member);


    return new ResponseEntity<>(ResponseDto.success(
            null, "정상적으로 회원가입 되었습니다.", HttpStatus.CREATED), HttpStatus.CREATED);
  }

  @GetMapping("/mypage")
  ResponseEntity<?> getMyPage() {
    Member findMember = memberService.findByEmail();
    MemberDto.Response responseDto = mapper.memberToMemberResponseDto(findMember);
    return new ResponseEntity<>(ResponseDto.success(responseDto, "MYPAGE",HttpStatus.OK),HttpStatus.OK);
  }

  @PatchMapping
  public ResponseEntity<?> updateMember(@Valid @RequestBody MemberDto.Patch patch) {
    memberService.updateMember(mapper.memberPatchDtoToMember(patch));

    return new ResponseEntity<>(ResponseDto.success(null, "회원 정보가 정상적으로 업데이트 되었습니다.", HttpStatus.OK), HttpStatus.OK);
  }

  @DeleteMapping
  public ResponseEntity<?> deleteMember(HttpServletRequest request){
    String accessToken = request.getHeader("Authorization").substring(7);
    memberService.deleteMember(request);
    return new ResponseEntity<>(ResponseDto.success(null, "정상적으로 회원탈퇴 되었습니다.", HttpStatus.OK), HttpStatus.OK);
  }
  @GetMapping("/logout")
  public ResponseEntity<?> logout(HttpServletRequest request){
    memberService.logout(request);
    return new ResponseEntity<>(ResponseDto.success(null, "정상적으로 로그아웃 되었습니다.", HttpStatus.OK), HttpStatus.OK);
  }
}
