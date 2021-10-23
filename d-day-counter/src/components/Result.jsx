import React from 'react'
import Text1 from './Text1'
import Text2 from './Text2'

function Result({year, month, day}) {
  return (
    <div className="result">
      <Text1 year={year} month={month} day={day}/>
      <Text2 year={year} month={month} day={day}/>
    </div>
  )
}

export default Result
