package project.finalpj.service;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import project.finalpj.entity.Member;
import project.finalpj.repository.MemberRepository;

@Service
public class MemberService {

    private final MemberRepository memberRepository;

    private final PasswordEncoder passwordEncoder;

    public MemberService(MemberRepository memberRepository, PasswordEncoder passwordEncoder) {
        this.memberRepository = memberRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public Member create(String userid, String password, String username, String email) {
        Member member = new Member();
        member.setUserid(userid);
        member.setPassword(passwordEncoder.encode(password));
        member.setUsername(username);
        member.setEmail(email);
        this.memberRepository.save(member);
        return member;
    }


    public boolean login(String userid, String rawPassword) {
        // 사용자 id로 DB에서 사용자 정보 가져옴
        Member member = memberRepository.findByUserid(userid).orElse(null);

        if (member != null) {
            // DB에 저장된 암호화된 비밀번호화 사용자가 입력한 비밀번호 비교
            return passwordEncoder.matches(rawPassword, member.getPassword());
        }

        return false;
    }

    public String getUserName(String userId) {
        // userId를 사용하여 사용자 이름 조회
        Member member = memberRepository.findByUserid(userId).orElse(null);

        if (member != null) {
            return member.getUsername();
        }

        return null;  // 사용자를 찾을 수 없을 경우 null 반환
    }

}
