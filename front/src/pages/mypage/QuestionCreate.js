import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function QuestionCreate() {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    async function onSubmit(event) {
        event.preventDefault();
        if (subject === "" || content === "") {
            alert("제목과 내용을 입력해주세요.")
        } else {
            try {
                const result = await axios.post("http://localhost:8080/mypage/qna/question-create/", {
                    subject: subject,
                    content: content
                })
                if (result.status === 200) {
                    navigate("/mypage/qna");
                }
            } catch (error) {
                alert("서버 문제로 질문 등록 불가")
            }
        }
        console.log("제목 : " + subject)
        console.log("내용 : " + content)
    }

    function onChange(event) {
        if (event.target.name === "subject") {
            setSubject(event.target.value);
        } else if (event.target.name === "content") {
            setContent(event.target.value);
        }
    }

    return (
        <div>
            <h5 className="border-bottom pb-2">질문등록</h5>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">제목</label>
                    <input onChange={onChange} value={subject} type="text" name="subject" id="subject" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">내용</label>
                    <textarea onChange={onChange} value={content} name="content" id="content" className="form-control" rows="10"></textarea>
                </div>
                <input type="submit" value="저장하기" className="btn btn-primary"></input>
            </form>
        </div>
    )
}

export default QuestionCreate;