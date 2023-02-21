package _BE_Project.member.service;

import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.MemberRepository;
import _BE_Project.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
  
  private final MemberRepository memberRepository;
  private final PasswordEncoder passwordEncoder;
  private final CustomAuthorityUtils authorityUtils;


  public Member saveMember(Member member){
    Member findMember = memberRepository.findByEmail(member.getEmail());
    member.setPassword(passwordEncoder.encode(member.getPassword()));
    member.setRoles(authorityUtils.createRoles(member.getEmail()));
    
    return memberRepository.save(member);
  }

  // 회원정보 수정 로직 임시구현 (내용이 적어서 어떤것을 바꿔야할지..)
  public Member updateMember(Member member) {
    Member findMember = findMember(member.getMemberId());

    return memberRepository.save(findMember);
  }
  
  @Transactional(readOnly = true)
  public Member findMember(long memberId){
    Member findMember = memberRepository.findById(memberId).orElseThrow(() -> new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
    return findMember;
  }

  @Transactional(readOnly = true)
  public Page<Member> findMembers (int page, int size) {
    return memberRepository.findAll(PageRequest.of(page, size, Sort.by("memberId").descending()));
  }

  public void deleteMember (long memberId) {
    Member findMember = memberRepository.findByMemberId(memberId);
    memberRepository.delete(findMember);
  }
  
  /*public void verifyExistsEmail(String email){
    Optional<Member> optionalMember = memberRepository.findByEmail(email);
    if(optionalMember.isPresent()){
      throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
  }*/
}
