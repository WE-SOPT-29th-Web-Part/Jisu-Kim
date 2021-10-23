import React from 'react'

function Text2({year, month, day}) {
  return (
    <div className="text__left">
      <div>
        D - <input type="text" />은?
      </div>
      <div>
        yyyy년 mm월 dd일
      </div>
    </div>
  )
}

export default Text2
