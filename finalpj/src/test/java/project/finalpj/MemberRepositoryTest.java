package project.finalpj;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.crypto.password.PasswordEncoder;
import project.finalpj.entity.Member;
import project.finalpj.repository.MemberRepository;

@SpringBootTest
public class MemberRepositoryTest {

    @Autowired
    private MemberRepository memberRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Test
    void testJpa_1() {  // db에 데이터가 잘 들어가는지, 연동이 잘 되었는지
        Member member1 = new Member();
        member1.setUserid("kiiim");
        member1.setPassword("jdddda");
        member1.setUsername("김지현");
        member1.setEmail("3r3r@naver.com");
        this.memberRepository.save(member1);

        Member member2 = new Member();
        member2.setUserid("leee");
        member2.setPassword(passwordEncoder.encode("dfsdfs"));
        member2.setUsername("이경주");
        member2.setEmail("DFSD@naver.com");
        this.memberRepository.save(member2);
    }
}