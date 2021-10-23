import React, { useEffect, useState } from 'react'

function Text1({year, month, day}) {
  const [dDay, setdDay] = useState(0);

  const onChangeDay = (e) => {
    setdDay(e.target.value);
    printDate(dDay);
  }

  const [result, setResultDate] = useState('');

  const printDate = (dDay) => {
    const tempDate = new Date();
    tempDate.setFullYear(year);
    tempDate.setMonth(month - 1);
    tempDate.setDate(day + Number(dDay) - 1);
    const result = `${tempDate.getFullYear()}년 ${tempDate.getMonth() + 1}월 ${tempDate.getDate()}일`;
    setResultDate(result);
    console.log(`tempDate`, tempDate);
  }

//useEffect써서 componentDidupdate시 변경
  useEffect(() => {
    printDate(year, month, day)
  }, [year, month, day])

  //과제~~~~
  //1.오늘을 눌렀을 때 날짜가 오늘로 바뀌도록 (완료)
  //2. 디데이 계산
  
  return (
    //변하는 값을 상태로 받아와야. = 인풋값이 변하는 값.
    //input의 값을 상태로 받아와서 onChange로 상태 업데이트해보장.

    <div className="text__left">
      <div>
        <input type="text" onChange={onChangeDay}/>일째 되는 날은?
      </div>
      <div>
        {dDay}
        yyyy년 mm월 dd일
      </div>
    </div>
  )
}

export default Text1
