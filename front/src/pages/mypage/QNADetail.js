import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import moment from "moment";

function QNADetail() {
    const [question, setQuestion] = useState([]);
    const [answer, setAnswer] = useState([]);
    const [answerText, setAnswerText] = useState([]);
    const params = useParams();
    const navigate = useNavigate();
    
    useEffect(() => {
        async function getQuestion() {
            try {
                const result = await axios.get(`http://localhost:8080/mypage/qna/${params.id}`);
                console.log(result);
                setQuestion(result.data);
                setAnswer(result.data.answerlist);
            } catch (error) {
                console.log(error);
            }
        }
        getQuestion();
    }, [params.id])

    function onChange(event) {
       setAnswerText(event.target.value) 
    }

    async function onSubmit(event) {
        if (answerText === "") {
            alert("답변 내용을 입력해주세요.")
        } else {
            event.preventDefault();
            try {
                const result = await axios.post(`http://localhost:8080/mypage/qna/answer-create/${params.id}`, {
                    content: answerText
                });
                if (result.status === 200) {
                    navigate(0);
                }
            } catch (error) {
                console.log(error);
            }
        }
    }

    async function onDelete() {
        if (window.confirm("삭제하시겠습니까?")) {
            try {
                await axios.delete(`http://localhost:8080/mypage/qna/question-delete/${params.id}`);
                alert("삭제 되었습니다.");
                navigate("/mypage/qna");
            } catch (error) {
                alert("네트워크 문제로 삭제가 되지 않았습니다.");
            }
        } else {
            alert("취소되었습니다.")
        }
    }

    return (
        <div>
            <h2 className="border-bottom py-2">{question.subject}</h2>
            <div className="card my-3">
                <div className="card-body">
                    <div className="card-text" style={{whiteSpace: 'pre-line'}}>{question.content}</div>
                    <div className="d-flex justify-content-end">
                        <div className="badge bg-light text-dark p-2 text-start">
                            <div>작성 : {moment(question.createDate).format("YYYY-MM-DD HH:mm:ss")}</div>
                        </div>
                    </div>
                    <div className="mt-3">
                        {/* 질문 수정 버튼 */}
                        <Link to={`/mypage/qna/question-modify/${params.id}`} className="btn btn-sm btn-outline-secondary">수정</Link>
                        {/* 질문 삭제 버튼 */}
                        <Link><button onClick={onDelete} className="btn btn-sm btn-outline-danger ms-2">삭제</button></Link>
                    </div>
                    
                </div>
            </div>
            <h5 className="border-bottom py-2">{answer.length}개의 답변</h5>
            {answer.map((answer, index) => {
                return (
                    <div className="card my-3" key={index}>
                    <div className="card-body">
                        <div className="card-text" style={{whiteSpace: 'pre-line'}}>{answer.content}</div>
                        <div className="d-flex justify-content-end">
                            <div className="badge bg-light text-dark p-2 text-start">
                                <div>작성 : {moment(answer.createDate).format("YYYY-MM-DD HH:mm:ss")}</div>
                            </div>
                        </div>
                    </div>
                </div>
                )
            })}
                        
            <form onSubmit={onSubmit} className="my-3">
                <textarea 
                    onChange={onChange} value={answerText} 
                    name="content" id="content" rows="10" className="form-control"></textarea>
                <input type="submit" value="답변등록" className="btn btn-primary my-2"></input>
            </form>
        </div>
)
}

export default QNADetail;