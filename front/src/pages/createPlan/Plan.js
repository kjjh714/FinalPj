import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from 'date-fns/esm/locale';

import "react-datepicker/dist/react-datepicker.css";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

function DateRangePicker() {
  const navigate = useNavigate();

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleDatechange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  const moveNextClick = () => {
    navigate('/plan/createplan/choice1')
  }

  const SDatePicker = styled(DatePicker)`
    margin-left: 0.5rem;
    width: 200px;
    height: 36px;
    box-sizing: border-box;
    padding: 8px 10px;
    border-radius: 5px;
    border: 1px solid lightGray;
    font-size: 13px;
    font-color: lightGray;
    `;
  
  return (
    <>
      <div className="text-center">
          <h3><b>날짜를 선택하세요</b></h3>
          <p className="text-center">달력 더 크게</p>
          <br/>
          <SDatePicker
              locale={ ko }
              dateFormat="yyyy년 MM월 dd일"
              selected={startDate} 
              onChange={handleDatechange}
              monthsShown={2}
              minDate={new Date()}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              inline
          />
          {startDate && endDate && (
            <div>
              <p><b>시작일</b> : {startDate.toLocaleDateString()}</p>
              <p><b>종료일</b> : {endDate.toLocaleDateString()}</p>
            </div>
          )}
      </div>

      <br/>
      <div>
        <p>↓ 버튼 오른쪽에 정렬</p>
        <p>날짜 선택안되면 다음페이지 안넘어가도록 설정 필요</p>
        <button type="button" className="btn btn-outline-secondary" onClick={moveNextClick}>다음</button>
      </div>
    </>
  );
};

export default DateRangePicker;