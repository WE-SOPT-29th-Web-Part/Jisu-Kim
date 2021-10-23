import React from 'react'
import Text1 from './Text1'
import Text2 from './Text2'

//1.오늘을 눌렀을 때 날짜가 오늘로 바뀌도록 (완료)

//2. 디데이 계산

//지정 날짜로부터 며칠인지
function Result({year, month, date}) {
  return (
    <div className="result">
      <Text1 year={year} month={month} date={date}/>
      <Text2 year={year} month={month} date={date}/>
    </div>
  )
}

export default Result
