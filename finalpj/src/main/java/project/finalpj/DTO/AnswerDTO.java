package project.finalpj.DTO;

import lombok.Getter;
import lombok.Setter;
import project.finalpj.entity.Answer;

import java.time.LocalDateTime;

@Getter
@Setter
public class AnswerDTO {

    private Integer id;
    private String content;
    private LocalDateTime createDate;

    public static AnswerDTO fromAnswer(Answer answer) {
        AnswerDTO answerDTO = new AnswerDTO();
        answerDTO.setId(answer.getId());
        answerDTO.setContent(answer.getContent());
        answerDTO.setCreateDate(answer.getCreateDate());

        return answerDTO;
    }
}
