package _BE_Project.member.controller;

import _BE_Project.dto.MultiResponseDto;
import _BE_Project.member.dto.MemberDto;
import _BE_Project.member.dto.ResponseDto;
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
    memberService.saveMember(member);
    ResponseDto responseDto = createResponseDto("정상적으로 회원가입 되었습니다.", HttpStatus.CREATED);

    return new ResponseEntity<>(responseDto, HttpStatus.CREATED);
  }

  @GetMapping("/mypage")
  ResponseEntity<?> getMyPage() {
    Member findMember = memberService.findByEmail();
    MemberDto.Response responseDto = mapper.memberToMemberResponseDto(findMember);
    return new ResponseEntity<>(responseDto, HttpStatus.OK);
  }

  @PatchMapping
  public ResponseEntity<?> updateMember(@Valid @RequestBody MemberDto.Patch patch) {
    memberService.updateMember(mapper.memberPatchDtoToMember(patch));
    ResponseDto responseDto = createResponseDto("회원 정보가 정상적으로 업데이트 되었습니다.", HttpStatus.OK);
    return new ResponseEntity<>(responseDto, HttpStatus.OK);
  }

  @DeleteMapping
  public ResponseEntity<?> deleteMember(HttpServletRequest request){
    String accessToken = request.getHeader("Authorization").substring(7);
    memberService.deleteMember(request);
    ResponseDto responseDto = createResponseDto("정상적으로 회원탈퇴 되었습니다.", HttpStatus.OK);
    return new ResponseEntity<>(responseDto, HttpStatus.OK);
  }
  @GetMapping("/logout")
  public ResponseEntity<?> logout(HttpServletRequest request){
    memberService.logout(request);
    ResponseDto responseDto = createResponseDto("정상적으로 로그아웃 되었습니다.", HttpStatus.OK);
    return new ResponseEntity<>(responseDto, HttpStatus.OK);
  }

  private ResponseDto createResponseDto(String message, HttpStatus httpStatus){
    return ResponseDto.builder().message(message).status(httpStatus.value()).build();
  }
}
