package hello.core;

import hello.core.member.Grade;
import hello.core.member.Member;
import hello.core.member.MemberService;
import hello.core.member.MemberServiceImpl;

public class MemberApp {
    public static void main(String[] args) {
        // member 홍길동 가입
        MemberService memberService = new MemberServiceImpl();
        Member member = new Member(1L, "홍길동", Grade.VIP);
        memberService.join(member);

        // member 홍길동 찾기
        Member findMember = memberService.findMember(1L);
        System.out.println("new member = " + member.getName());
        System.out.println("find Member = " + findMember.getName());
    }
}