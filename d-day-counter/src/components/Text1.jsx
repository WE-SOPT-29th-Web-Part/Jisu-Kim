import React, { useState } from 'react'

function Text1({year, month, date}) {
  //1. 날짜표시해줄 값을 만들고, 상태변경되게한다.
  //2. input으로부터 값(inputDate)을 받아온다.
  //3. inputDate와 props로 받아온 년, 월, 일을 더해서 날짜형식으로 표시한다. (일 수를 지나치면 월로 넘어가게)
  
  const [calcDate, setCalcDate] = useState("언제일까요?");

  const onChangeDate = (e) => {
    let inputDate =  e.target.value;

    const baseDate = new Date(year, month, date);
    console.log(baseDate + inputDate);
    console.log(baseDate);
  }
  return (
    //변하는 값을 상태로 받아와야. = 인풋값이 변하는 값.
    //input의 값을 상태로 받아와서 onChange로 상태 업데이트해보장.

    <div className="text__left">
      <div>
        <input type="text" onChange={onChangeDate}/>일째 되는 날은?
      </div>
      <div>
        {calcDate}
      </div>
    </div>
  )
}

export default Text1
