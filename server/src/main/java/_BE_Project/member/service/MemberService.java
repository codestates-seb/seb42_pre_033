package _BE_Project.member.service;

import _BE_Project.exception.BusinessLogicException;
import _BE_Project.exception.ExceptionCode;
import _BE_Project.member.entity.Member;
import _BE_Project.member.repository.MemberRepository;
<<<<<<< Updated upstream
import _BE_Project.member.repository.RefreshTokenRedisRepository;
=======
import _BE_Project.security.jwt.JwtTokenProvider;
>>>>>>> Stashed changes
import _BE_Project.security.utils.CustomAuthorityUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.servlet.http.HttpServletRequest;
import java.util.Map;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class MemberService {
  
  private final MemberRepository memberRepository;
  private final PasswordEncoder passwordEncoder;
  private final CustomAuthorityUtils authorityUtils;
<<<<<<< Updated upstream
  private final RefreshTokenRedisRepository redisRepository;
=======

  private final JwtTokenProvider JwtTokenProvider;

>>>>>>> Stashed changes


  public Member saveMember(Member member){
    Member findMember = memberRepository.findByEmail(member.getEmail());
    member.setPassword(passwordEncoder.encode(member.getPassword()));
    member.setRoles(authorityUtils.createRoles(member.getEmail()));
    
    return memberRepository.save(member);
  }

  public MemberService(MemberRepository memberRepository, JwtTokenProvider jwtTokenProvider){
    this.memberRepository = memberRepository;
    this.JwtTokenProvider = jwtTokenProvider;
  }

  // 회원정보 수정 로직 임시구현 (내용이 적어서 어떤것을 바꿔야할지..)
  public Member updateMember(Member member) {
    Member findMember = findMember(member.getMemberId());

    return memberRepository.save(findMember);
  }
  public void logout(HttpServletRequest request){
    String accessToken = request.getHeader("Authorization").substring(7);
    String email = (String) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
    // blacklist 에 등록 이후 해당 토큰으로 요청시 거절함
    redisRepository.setBlackList(accessToken);
    // refresh 토큰 제거
    redisRepository.deleteBy(email);
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

  //액세스 토큰으로 사용자 찾기
  public Member findByAccessToken(String AccessToken){
    String jws = AccessToken.replace("bearer ", "");
    String base64EncodedSecretKey = _BE_Project.security.jwt.JwtTokenProvider.encodeBase64SecretKey(jwtTokenizer.getSecretKey());
    Map<String, Object> claims = _BE_Project.security.jwt.JwtTokenProvider.parseClaims(jws, base64EncodedSecretKey).getBody();
    String email = (String) claims.get("email");
    Member member = findByEmail(email);
    return member;
  }
  public void deleteMember (long memberId) {
    Member findMember = memberRepository.findByMemberId(memberId);
    memberRepository.delete(findMember);
  }
//  public void verifyExistsEmail(String email){
//    Optional<Member> optionalMember = memberRepository.findByEmail(email);
//    Member byEmail = memberRepository.findByEmail(email);
//    if(optionalMember.isPresent()){
//      throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
//    }
//  }

}
