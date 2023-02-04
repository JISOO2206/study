package hello.core.member;

import hello.core.AppConfig;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class MemberServiceTest {

    // 아래와 같이 코드를 짜면 컴파일 오류남
    //MemberService memberService = new AppConfig().memberService();

    MemberService memberService;

    // 테스트 실행 전에 실행되는 코드
    // 만약 테스트가 2번있는 경우 두 번 실행됨.
    @BeforeEach
    public void beforeEach(){
        AppConfig appConfig = new AppConfig();
        memberService = appConfig.memberService();
    }

    @Test
    void join() {
       //given : 이러한 환경이 주어졌을 때
        Member member = new Member(1L, "memberA", Grade.BASIC);

        //when : 이러한 조건일 때
        memberService.join(member);
        Member findMember = memberService.findMember(1L);
        // 만약 사항이 있다면, 해당 오류 사항에 대해서 log가 찍히고 문제 없이 작동한다면 초록색 불이 뜨면서 종료 코드까지 실행한다.

        //then : 이렇게 된다. (검증하는 로직)
        // Assertions - assertj.core.api를 사용한다.
        Assertions.assertThat(member).isEqualTo(findMember);
    }
}
