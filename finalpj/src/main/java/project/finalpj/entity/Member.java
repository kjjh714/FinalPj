package project.finalpj.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@Entity
public class Member { // 회원정보 저장 Entity


//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private Integer seq;

    @Id
    @Column(unique = true)
    private String userid;

    @Column
    private String password;

    @Column
    private String username;

    @Column(unique = true)
    private String email;
}
