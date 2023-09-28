import { useNavigate } from "react-router-dom";

function Choice_sight() {
    const navigate = useNavigate();

    const moveNextClick = () => {
        navigate('/plan/createplan/choice3')
    }

    return (
        <div>
            <p>2. 관광지 리스트 노출 → 선택</p>
            <div>
                <p>↓ 버튼 오른쪽에 정렬</p>
                <p>선택안되면 다음페이지 안넘어가도록 설정</p>
                <button type="button" className="btn btn-outline-secondary" onClick={moveNextClick}>다음</button>
            </div>
        </div>
    )
}

export default Choice_sight;