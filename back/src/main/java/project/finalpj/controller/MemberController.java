package project.finalpj.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.finalpj.service.MemberService;

import java.util.Map;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    private final MemberService memberService;

    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody Map<String, String> map) {
        try {
            System.out.println("들어오나?");
            memberService.create(map.get("userid"), map.get("password"), map.get("username"), map.get("email"));
            return ResponseEntity.ok().build();
        } catch (DataIntegrityViolationException e) {
            return ResponseEntity.badRequest().body("이미 등록된 사용자입니다");
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("결론은 에러");
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> map) {
        try {
            String userid = map.get("userid");
            String password = map.get("password");

            // 로그인 처리 (비밀번호 검증)
            boolean loginSuccess = memberService.login(userid, password);

            if (loginSuccess) {
//                return ResponseEntity.ok().build();
                return new ResponseEntity<>(userid, HttpStatus.OK);
            } else {
                return ResponseEntity.badRequest().body("로그인 실패");
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("로그인 에러");
        }
    }

    @GetMapping("/getUserName")
    public ResponseEntity<?> getUserName(@RequestParam String userId) {
        try {
            //userId를 사용하여 사용자 이름 조회
            String userName = memberService.getUserName(userId);

            if (userName != null) {
                return ResponseEntity.ok(userName);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("사용자 이름 조회 에러");
        }
    }
}