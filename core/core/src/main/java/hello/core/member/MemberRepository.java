package hello.core.member;

public interface MemberRepository {

    // 회원 저장 기능능
   void save(Member member);
   
   // 회원 id를 찾는 기능
   Member findById(Long memberId);

}
