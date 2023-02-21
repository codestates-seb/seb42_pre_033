package _BE_Project.member.service;

import _BE_Project.exceiption.BusinessLogicException;
import _BE_Project.exceiption.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.MemberRepository;
import _BE_Project.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
  
  private final MemberRepository memberRepository;
  private final PasswordEncoder passwordEncoder;
  private final CustomAuthorityUtils authorityUtils;
  
  public Member saveMember(Member member){
    verifyExistsEmail(member.getEmail());
    member.setPassword(passwordEncoder.encode(member.getPassword()));
    member.setRoles(authorityUtils.createRoles(member.getEmail()));
    
    return memberRepository.save(member);
  }
  
  public Member findMember(String email){
    Optional<Member> optionalMember = memberRepository.findByEmail(email);
    return optionalMember.orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
  }
  
  public void verifyExistsEmail(String email){
    Optional<Member> optionalMember = memberRepository.findByEmail(email);
    if(optionalMember.isPresent()){
      throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
  }
}
