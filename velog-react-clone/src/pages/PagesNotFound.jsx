import React from 'react'
import styled from 'styled-components';


const NotFoundMessage = styled.h2`
  text-align: center;
  color: rgb(68, 248, 161);
`;

function PagesNotFound() {
  return (
    <NotFoundMessage>
      페이지를 찾을 수 없습니다😓
    </NotFoundMessage>
  )
}

export default PagesNotFound
