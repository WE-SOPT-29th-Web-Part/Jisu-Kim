import React from 'react'
import styled from 'styled-components';

const NavItem = styled.button`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: grey;
  border: none;
  background: none;
  cursor: pointer;
  margin-right: 0.625rem;
  &:hover {
    color: darkcyan
  }
`;

const NavBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Nav({ viewHandler }) {
  return (
    <NavBox>
      <NavItem onClick={viewHandler} name="today">오늘만 보기</NavItem>
      <NavItem onClick={viewHandler} name="tomorrow">내일만 보기</NavItem>
      <NavItem onClick={viewHandler} name="both">함께보기</NavItem>
    </NavBox >
  )
}

export default Nav
