package hello.core.member;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;

public class MemberServiceTest {

    MemberService memberService = new MemberServiceImpl();

    @Test
    void join() {
       //given : 이러한 환경이 주어졌을 때
        Member member = new Member(1L, "memberA", Grade.BASIC);

        //when : 이러한 조건일 때
        memberService.join(member);
        Member findMember = memberService.findMember(1L);

        //then : 이렇게 된다. (검증하는 로직)
        // Assertions - assertj.core.api를 사용한다.
        Assertions.assertThat(member).isEqualTo(findMember);
    }
}
