import React, { useState } from 'react';

function Survey() {
    const [step, setStep] = useState(1);
    const [travelWith, setTravelWith] = useState('');
    const [travelThemes, setTravelThemes] = useState([]);
    const [locationPrice, setLocationPrice] = useState('');
    const [reviewRating, setReviewRating] = useState('');

    const handleNextStep = () => {
        setStep(step + 1);
    };

    const renderStep = () => {
        switch (step) {
        case 1:
            return (
            <div>
                <h2>질문 1: 함께할 사람을 선택하세요</h2>
                <label>
                <input
                    type="radio"
                    value="혼자"
                    checked={travelWith === '혼자'}
                    onChange={() => setTravelWith('혼자')}
                />
                혼자
                </label>
                <label>
                <input
                    type="radio"
                    value="친구"
                    checked={travelWith === '친구'}
                    onChange={() => setTravelWith('친구')}
                />
                친구
                </label>
                {/* 연인, 가족 등 다른 옵션들 추가 */}
                <button onClick={handleNextStep}>다음</button>
            </div>
            );
        case 2:
            return (
            <div>
                <h2>질문 2: 여행 테마 중 2개를 선택하세요</h2>
                <label>
                <input
                    type="checkbox"
                    value="핫플레이스"
                    checked={travelThemes.includes('핫플레이스')}
                    onChange={() =>
                    setTravelThemes((prevThemes) =>
                        prevThemes.includes('핫플레이스')
                        ? prevThemes.filter((theme) => theme !== '핫플레이스')
                        : [...prevThemes, '핫플레이스']
                    )
                    }
                />
                핫플레이스
                </label>
                <label>
                <input
                    type="checkbox"
                    value="체험/액티비티"
                    checked={travelThemes.includes('체험/액티비티')}
                    onChange={() =>
                    setTravelThemes((prevThemes) =>
                        prevThemes.includes('체험/액티비티')
                        ? prevThemes.filter((theme) => theme !== '체험/액티비티')
                        : [...prevThemes, '체험/액티비티']
                    )
                    }
                />
                체험/액티비티
                </label>
                {/* 다른 여행 테마 옵션들 추가 */}
                <button onClick={handleNextStep}>다음</button>
            </div>
            );
        case 3:
            return (
            <div>
                <h2>질문 3: 위치와 가격 중 하나를 선택하세요</h2>
                <button onClick={() => setLocationPrice('낮음')}>
                <img src="low_price_image.jpg" alt="낮음" />
                </button>
                <button onClick={() => setLocationPrice('보통')}>
                <img src="medium_price_image.jpg" alt="보통" />
                </button>
                <button onClick={() => setLocationPrice('높음')}>
                <img src="high_price_image.jpg" alt="높음" />
                </button>
                <button onClick={handleNextStep}>다음</button>
            </div>
            );
        case 4:
            return (
            <div>
                <h2>질문 4: 리뷰와 평점 중 하나를 선택하세요</h2>
                <button onClick={() => setReviewRating('낮음')}>
                <img src="low_rating_image.jpg" alt="낮음" />
                </button>
                <button onClick={() => setReviewRating('보통')}>
                <img src="medium_rating_image.jpg" alt="보통" />
                </button>
                <button onClick={() => setReviewRating('높음')}>
                <img src="high_rating_image.jpg" alt="높음" />
                </button>
                <button onClick={handleNextStep}>다음</button>
            </div>
            );
        default:
            return <div>설문조사 완료!</div>;
        }
    };

    return (
        <div className="App">
        <h1>여행 성향 설문조사</h1>
        {renderStep()}
        </div>
    );
}

export default Survey;