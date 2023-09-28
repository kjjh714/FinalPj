package project.finalpj.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.finalpj.entity.Answer;

public interface AnswerRepository extends JpaRepository<Answer, Integer> {
}
