package _BE_Project.member.controller;

import _BE_Project.member.dto.MemberDto;
import _BE_Project.member.entity.Member;
import _BE_Project.member.mapper.MemberMapper;
import _BE_Project.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
    
    String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    
    Member member = mapper.memberPostDtoToMember(postDto);
    Member savedMember = memberService.saveMember(member);
    
    return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
  }
  @GetMapping("{email}")
  public ResponseEntity<?> getMember(@PathVariable String email){
    Member findMember = memberService.findMember(email);
    MemberDto.Response response = mapper.memberToMemberResponseDto(findMember);
    
    return new ResponseEntity<>(response, HttpStatus.OK);
  }
  @PatchMapping("{id}")
  public ResponseEntity<?> updateMember(@PathVariable Long id){
  
  }
  @DeleteMapping("{id}")
  public ResponseEntity<?> deleteMember(@PathVariable Long id){
  
  }
  @GetMapping("/logout")
  public ResponseEntity<?> logout(HttpServletRequest request){
    memberService.logout(request);
    return new ResponseEntity<>("successfully logged out.",HttpStatus.OK);
  }
}
