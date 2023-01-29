package hello.core.member;

import java.util.HashMap;
import java.util.Map;

public class MemoryMemberRepository implements MemberRepository{

    /*
    *   사실 repository의 경우 분리해야 맞는 건데,
    *   그럼 너무 복잡해 져서 일단 같은 패키지에 두는 걸로
    * */

    private static Map<Long, Member> store = new HashMap<>();

    @Override
    public void save(Member member) {
        store.put(member.getId(), member);
    }

    @Override
    public Member findById(Long memberId) {
        return store.get(memberId);
    }
}
