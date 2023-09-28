import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function QNAModify() {
    const [subject, setSubject] = useState("");
    const [content, setContent] = useState("");
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        async function getQuestion() {
            try {
                const result = await axios.get(`http://localhost:8080/mypage/qna/${params.id}`)
                setSubject(result.data.subject);
                setContent(result.data.content);
            } catch (error) {
                console.log(error);
            }
        }
        getQuestion();
    }, [params.id])

    function onChange(event) {
        if (event.target.name === "subject") {
            setSubject(event.target.value);
        } else if (event.target.name === "content") {
            setContent(event.target.value);
        }
    }

    async function onUpadte(event) {
        event.preventDefault();
        if (subject === "" || content === "") {
            alert("수정할 제목과 내용을 입력해주세요")
        } else {
            try {
                const result = await axios.put(`http://localhost:8080/mypage/qna/question-modify/${params.id}`, {
                    subject: subject,
                    content: content
                })
                if (result.status === 200) {
                    navigate(`/mypage/qna/${params.id}`);
                }
            } catch (error) {
                alert("네트워크에 문제가 있어 질문을 수정할 수 없습니다.")
                
            }
        }
    }

    return (
        <div>
            <h5 className="border-bottom pb-2">질문 수정</h5>
            <form onSubmit={onUpadte}>
                <div className="mb-3">
                    <label htmlFor="subject" className="form-label">제목</label>
                    <input onChange={onChange} value={subject} type="text" name="subject" id="subject" className="form-control"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="content" className="form-label">내용</label>
                    <textarea onChange={onChange} value={content} name="content" id="content" className="form-control" rows="10"></textarea>
                </div>
                <input type="submit" value="수정하기" className="btn btn-primary"></input>
            </form>
        </div>
    )
}

export default QNAModify;