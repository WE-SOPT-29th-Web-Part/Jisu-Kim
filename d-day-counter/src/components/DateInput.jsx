import React from 'react';

function DateInput({setYear, setMonth, setDay, year, month, day}) {
  const handleChange = (e, setState) => {
    setState(e.target.value);
  }

  //오늘눌렀을 때 날짜 오늘로 바꿔주기
  const onClickToday = () => {
    const TodayDate = new Date().getDate();
    const TodayYear = new Date().getFullYear();
    const TodayMonth = new Date().getMonth() + 1;
    setYear(TodayYear);
    setMonth(TodayMonth);
    setDay(TodayDate);

  }
  //상태 끌어올리기 : 상태를 부모컴포넌트로 올린다..
  return (
    <div id="dateInput">
      <button onClick={onClickToday}>오늘</button>
      <div>
        <input onChange={(e) => handleChange(e, setYear)} type="text" className="dateInput__input" value={year}/>년
        <input onChange={(e) => handleChange(e, setMonth)} type="text" className="dateInput__input" value={month}/>월
        <input onChange={(e) => handleChange(e, setDay)}  type="text" className="dateInput__input" value={day}/>일을 기준으로
      </div>
    </div>
  )
}

export default DateInput
