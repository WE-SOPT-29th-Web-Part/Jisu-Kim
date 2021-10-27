import React from 'react';

function DateInput({setBaseYear, setBaseMonth, setBaseDate, year, month, date}) {
  const handleChange = (e, setState) => {
    if (e.target.value > 0) {
      setState(Math.floor(Number(e.target.value)));
      // setState(Number(e.target.value));
    } else {
      setState(0)
    }
  }

  //오늘눌렀을 때 날짜 오늘로 바꿔주기
  const onClickToday = () => {
    const TodayDate = new Date().getDate();
    const TodayYear = new Date().getFullYear();
    const TodayMonth = new Date().getMonth() + 1;
    setBaseYear(TodayYear);
    setBaseMonth(TodayMonth);
    setBaseDate(TodayDate);

  }
  //상태 끌어올리기 : 상태를 부모컴포넌트로 올린다..
  return (
    <div id="dateInput">
      <div class="inputWrapper">
        <input onChange={(e) => handleChange(e, setBaseYear)} type="text" className="dateInput__input" value={year}/>년
        <input onChange={(e) => handleChange(e, setBaseMonth)} type="text" className="dateInput__input" value={month}/>월
        <input onChange={(e) => handleChange(e, setBaseDate)}  type="text" className="dateInput__input" value={date}/>일을 기준으로
      </div>
      <button onClick={onClickToday}>오늘</button>
    </div>
  )
}

export default DateInput
