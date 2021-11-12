import React, { useState } from 'react'
import styled from 'styled-components';

const NavBody = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const NavTab = styled.div`
  color: grey;
  font-size: 1.5rem;
  
  &:hover {
    color: black;
  }
`;

function HomeNav() {
  const [isActiveLine, setIsActiveLine] = useState(true);
  return (
    <NavBody>
      <NavTab>포스트</NavTab>
      <NavTab>시리즈</NavTab>
    </NavBody>
  )
}

export default HomeNav
