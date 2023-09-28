import { useNavigate } from "react-router-dom";

function Choice_lodgment() {
    const navigate = useNavigate();

    const moveNextClick = () => {
        navigate('/plan/createplan/choice2')
    }

    return (
        <div>
            <p> 1. 숙소 리스트 노출 → 선택</p>
            <p>관광지 추천 여부를 숙소 리스트 다음에 물어봐야되나...</p>
            <hr/>
            <div>
                <p>↓ 버튼 오른쪽에 정렬</p>
                <p>마찬가지로 숙소 선택안되면 다음페이지 안넘어가도록 설정</p>
                <button type="button" className="btn btn-outline-secondary" onClick={moveNextClick}>다음</button>
            </div>
        </div>
    )
}

export default Choice_lodgment;