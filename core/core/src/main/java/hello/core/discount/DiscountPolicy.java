package hello.core.discount;

import hello.core.member.Member;

public interface DiscountPolicy {

    // 얼마가 할인 되었는지 return 값으로 확인
    /**
     * @return 할인 대상 금액
     * */
    int discount(Member member, int price);
}
