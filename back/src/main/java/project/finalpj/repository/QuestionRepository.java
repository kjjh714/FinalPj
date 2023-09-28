package project.finalpj.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import project.finalpj.entity.Question;

public interface QuestionRepository extends JpaRepository<Question, Integer> {
}
