import React, { useState } from 'react'
import styled from 'styled-components';

const NavBody = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;

`;

function HomeNav() {
  const [isActiveLine, setIsActiveLine] = useState(true);
  return (
    <NavBody>
      글 시리즈
    </NavBody>
  )
}

export default HomeNav
