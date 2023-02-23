package _BE_Project.member.service;

import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.MemberRepository;
import _BE_Project.member.repository.RefreshTokenRedisRepository;
import _BE_Project.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
<<<<<<< HEAD
import org.springframework.security.core.context.SecurityContextHolder;
=======
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
>>>>>>> 36d5763036450354cc4ad6e0095cf24646a4eae8
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
  
  private final MemberRepository memberRepository;
  private final PasswordEncoder passwordEncoder;
  private final CustomAuthorityUtils authorityUtils;
<<<<<<< HEAD
  private final RefreshTokenRedisRepository redisRepository;
  
=======


>>>>>>> 36d5763036450354cc4ad6e0095cf24646a4eae8
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
  
<<<<<<< HEAD
  public void logout(HttpServletRequest request){
    String accessToken = request.getHeader("Authorization").substring(7);
    String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    // blacklist 에 등록 이후 해당 토큰으로 요청시 거절함
    redisRepository.setBlackList(accessToken);
    // refresh 토큰 제거
    redisRepository.deleteBy(email);
  }
  
  public void verifyExistsEmail(String email){
=======
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
>>>>>>> 36d5763036450354cc4ad6e0095cf24646a4eae8
    Optional<Member> optionalMember = memberRepository.findByEmail(email);
    if(optionalMember.isPresent()){
      throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
  }*/
}
