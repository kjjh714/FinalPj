import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../UserContext";

function MyPage() {
    
    const {userName} = useUser();
    const navigate = useNavigate();

    const planOnClick = () => {
        navigate('/mypage/planlist');
    }

    const recordOnClick = () => {
        navigate('/mypage/record');
    }

    const bookmarkOnClick = () => {
        navigate('/mypage/bookmark');
    }

    const reviewOnClick = () => {
        navigate('/mypage/review');
    }

    const qnaOnClick = () => {
        navigate('/mypage/qna');
    }

    // style
    const StyleButton = {
        margin: 'auto',
        borderInlineColor: 'black',
        borderInlineWidth: '2.5px'
    }

    const StyleDiv = {
        height: '200px',
        border: '1px solid lightgray',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <div className="container my-3">
            <div className="container">
                <h3><b>마이페이지</b></h3>
                <div className="text-center">
                    <p>중앙에 유저 프로필</p>
                    <p>{userName}님</p> {/* 사용자 이름을 상태 변수에서 가져와서 표시 */}
                    <Link to="/myPage/modify">회원 정보 수정</Link>
                </div>
                <hr></hr>
            </div>
            <div className="container" style={{width:'45%', float:'left'}}>
                <div>
                    <h4><b>나의 일정</b></h4>
                    <div className="text-center" style={StyleDiv}>
                        <button onClick={planOnClick} className='btn btn-outline btn-sm' style={StyleButton}>전체 일정 목록</button>
                        <button onClick={recordOnClick} className='btn btn-outline btn-sm' style={StyleButton}>여행 기록</button>
                    </div>
                </div>
            </div>
            <div className="container" style={{width:'45%', float:'right'}}>
                <div>
                    <h4><b>나의 활동</b></h4>
                    <div className="text-center" style={StyleDiv}>
                        <button onClick={bookmarkOnClick} className='btn btn-outline btn-sm' style={StyleButton}>찜</button>
                        <button onClick={reviewOnClick} className='btn btn-outline btn-sm' style={StyleButton}>리뷰</button>
                        <button onClick={qnaOnClick} className='btn btn-outline btn-sm' style={StyleButton}>Q&A</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyPage;