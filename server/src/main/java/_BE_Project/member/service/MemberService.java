package _BE_Project.member.service;

import _BE_Project.exceiption.BusinessLogicException;
import _BE_Project.exceiption.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.MemberRepository;
import _BE_Project.member.repository.RefreshTokenRedisRepository;
import _BE_Project.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
  
  private final MemberRepository memberRepository;
  private final PasswordEncoder passwordEncoder;
  private final CustomAuthorityUtils authorityUtils;
  private final RefreshTokenRedisRepository redisRepository;
  
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
  
  public void logout(HttpServletRequest request){
    String accessToken = request.getHeader("Authorization").substring(7);
    String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    // blacklist 에 등록 이후 해당 토큰으로 요청시 거절함
    redisRepository.setBlackList(accessToken);
    // refresh 토큰 제거
    redisRepository.deleteBy(email);
  }
  
  public void verifyExistsEmail(String email){
    Optional<Member> optionalMember = memberRepository.findByEmail(email);
    if(optionalMember.isPresent()){
      throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
  }
}
