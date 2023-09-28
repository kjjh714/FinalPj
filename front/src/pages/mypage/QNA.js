import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

function QNA() {
    const [questionList, setQuestionList] = useState([]);

    useEffect(() => {
        async function getQuestionList() {
            try {
                const result = await axios.get("http://localhost:8080/mypage/qna");
                setQuestionList(result.data);
            } catch(error) {
                console.log(error);
            }
        }
        getQuestionList();
    }, [])

    return (
        <div>
            <Link className="btn btn-primary" to="/mypage/qna/question-create">질문등록</Link>
            <table className="table text-center my-3">
                <thead className="table-dark">
                    <tr>
                        <th>No</th>
                        <th>제목</th>
                        <th>작성시간</th>
                    </tr>
                </thead>
                <tbody>
                    {questionList.map((question, index) => {
                        return (
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>
                                    {/* 답변 개수 표시 */}
                                    <Link className="text-decoration-none" to={`/mypage/qna/${question.id}`}>
                                        {question.subject}
                                        <sup className="text-danger ms-2">[{question.answerlist.length}]</sup>
                                    </Link>
                                </td>
                                <td>{moment(question.createDate).format("YYYY-MM-DD HH:mm:ss")}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default QNA;