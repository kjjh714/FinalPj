package project.finalpj;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import project.finalpj.entity.Answer;
import project.finalpj.repository.AnswerRepository;
import project.finalpj.entity.Question;
import project.finalpj.repository.QuestionRepository;

import java.time.LocalDateTime;
import java.util.Optional;

@SpringBootTest
public class QnARepositoryTest {

    @Autowired
    private QuestionRepository questionRepository;

    @Autowired
    private AnswerRepository answerRepository;

    @Test
    void testJpa_1() {
        Question q1 = new Question();
        q1.setSubject("질문1");
        q1.setContent("내용1");
        q1.setCreateDate(LocalDateTime.now());
        this.questionRepository.save(q1);
    }

    @Test
    void testJpa_2 () {
        Optional<Question> oq = this.questionRepository.findById(1);
        Assertions.assertTrue(oq.isPresent());
        Question q = oq.get();

        Answer a1 = new Answer();
        a1.setContent("내용1입니다.");
        a1.setQuestion(q);
        a1.setCreateDate(LocalDateTime.now());
        this.answerRepository.save(a1);

        Answer a2 = new Answer();
        a2.setContent("내용2입니다.");
        a2.setQuestion(q);
        a2.setCreateDate(LocalDateTime.now());
        this.answerRepository.save(a2);
    }
}
