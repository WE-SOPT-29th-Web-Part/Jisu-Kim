import React, { useState } from 'react'

function Text1({year, month, date}) {
  //1. 날짜표시해줄 값을 만들고, 상태변경되게한다.
  //2. input으로부터 값(inputDate)을 받아온다.
  //3. inputDate와 props로 받아온 년, 월, 일을 더해서 날짜형식으로 표시한다. (일 수를 지나치면 월로 넘어가게)
  
  const [calcDate, setCalcDate] = useState("언제일까요?");

  const onChangeDate = (e) => {

    let inputDate =  Number(e.target.value); //input은 string으로 들어오기 때문에 형변환 필수

    let baseDate = new Date(year, month-1, date); //화면에 표시하기 위해 month+1해주었던 걸 계산하기 위해 다시 -1해준다.
    baseDate.setDate(date + inputDate);
    let strDate = baseDate.toLocaleDateString()
    setCalcDate(strDate);
    console.log(year, month , date)
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
