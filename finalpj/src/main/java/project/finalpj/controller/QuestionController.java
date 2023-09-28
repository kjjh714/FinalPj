package project.finalpj.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.finalpj.DTO.QuestionDTO;
import project.finalpj.entity.Answer;
import project.finalpj.repository.AnswerRepository;
import project.finalpj.entity.Question;
import project.finalpj.repository.QuestionRepository;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class QuestionController {

    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;


    @GetMapping("/mypage/qna")
    public List<QuestionDTO> getQuestionList() {
        List<Question> questions = questionRepository.findAll();
        return questions.stream().map(QuestionDTO::fromQuestion).collect(Collectors.toList());
    }

    @GetMapping(value = "/mypage/qna/{id}")
    public ResponseEntity<?> getQuestionDetail(@PathVariable("id") Integer id){
        Optional<Question> questionOptional = questionRepository.findById(id);

        if (questionOptional.isPresent()) {
            QuestionDTO questionDTO = QuestionDTO.fromQuestion(questionOptional.get());
            return ResponseEntity.ok(questionDTO);
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("게시글을 찾을 수 없습니다.");
        }
    }

    @PostMapping(value = "mypage/qna/answer-create/{id}")
    public void answerSubmit(@PathVariable("id") Integer id, @RequestBody Map<String, String> map) {
        Question question = this.questionRepository.getReferenceById(id);
        Answer answer = new Answer();
        answer.setContent(map.get("content"));
        answer.setCreateDate(LocalDateTime.now());
        answer.setQuestion(question);
        answerRepository.save(answer);
    }

    @PostMapping(value = "/mypage/qna/question-create")
    public void questionSubmit(@RequestBody Map<String, String> map) {
        Question q = new Question();
        q.setSubject(map.get("subject"));
        q.setContent(map.get("content"));
        q.setCreateDate(LocalDateTime.now());
        questionRepository.save(q);
    }

    @PutMapping(value = "/mypage/qna/question-modify/{id}")
    public void questionModify(@PathVariable("id") Integer id, @RequestBody Map<String, String> map) {
        Question q = this.questionRepository.getReferenceById(id);
        q.setSubject(map.get("subject"));
        q.setContent(map.get("content"));
        q.setModifyDate(LocalDateTime.now());
        questionRepository.save(q);
    }

    @DeleteMapping(value = "/mypage/qna/question-delete/{id}")
    public String questionDelete(@PathVariable("id") Integer id) {
        Optional<Question> question = this.questionRepository.findById(id);
        if (question.isPresent()) {
            Question q = question.get();
            questionRepository.delete(q);
            return null;
        } else {
            return "not delete";
        }
    }
}
