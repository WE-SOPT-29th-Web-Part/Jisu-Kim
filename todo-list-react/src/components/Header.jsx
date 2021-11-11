import React from 'react'
import styled from 'styled-components';

const HeaderTitle = styled.h1`
  margin: 1rem;
  text-align: center;
  color: cadetblue;
  padding: 1rem;

`;

function Header() {
  return (
    <div>
      <HeaderTitle>💜지수의 투두리스트💜</HeaderTitle>
    </div>
  )
}

export default Header;
