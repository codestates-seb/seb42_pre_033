package _BE_Project.member.repository;


import _BE_Project.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {

  Member findByMemberId(long memberId);


  Optional<Member> findByEmail(String email); // 시큐리티 -> UserDetailServiceImpl 이메일 찾는 로직 에러로 임시 변경한 코드

  //Optional<Member> findByEmail(String email);
}
