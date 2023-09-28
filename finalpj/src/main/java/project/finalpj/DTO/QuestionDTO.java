package project.finalpj.DTO;

import lombok.Getter;
import lombok.Setter;
import project.finalpj.entity.Question;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@Getter
@Setter
public class QuestionDTO {
    private Integer id;
    private String subject;
    private String content;
    private LocalDateTime createDate;
    private List<AnswerDTO> answerlist;

    public static QuestionDTO fromQuestion(Question question) {
        QuestionDTO questionDTO = new QuestionDTO();
        questionDTO.setId(question.getId());
        questionDTO.setSubject(question.getSubject());
        questionDTO.setContent(question.getContent());
        questionDTO.setCreateDate(question.getCreateDate());

        // Set answerList here
        List<AnswerDTO> answerDTOList = question.getAnswerList().stream()
                .map(AnswerDTO::fromAnswer)
                .collect(Collectors.toList());
        questionDTO.setAnswerlist(answerDTOList);

        return questionDTO;
    }
}
