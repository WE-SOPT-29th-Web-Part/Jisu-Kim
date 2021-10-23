import React, { useState } from 'react'

function Text2({year, month, date}) {
  const [restDate, setRestDate] = useState("D-day는?");

  const calcDday = (e) => {
    //1. input에서 입력한 일수를 받아온다(dDay)
    //2. baseDate에서 dDay를 뺀다 : setDate(date - dDay)

    let dDay = Number(e.target.value);
    let baseDate = new Date(year, month-1, date);


    baseDate.setDate(date - dDay);
    setRestDate(baseDate.toLocaleDateString());
  }

  return (


    <div className="text__left">
      <div>
        D - <input onChange={calcDday} type="text" />은?
      </div>
      <div>
        {restDate}
      </div>
    </div>
  )
}

export default Text2
