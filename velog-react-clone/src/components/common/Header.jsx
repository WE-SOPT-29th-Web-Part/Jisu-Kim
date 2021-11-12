import React from 'react'
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as DropDownIcon } from '../../assets/icons/dropdown_arrow.svg';


const StyledHeaderBody = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 4rem;
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;


const WirteButton = styled.button`
  border: solid 1px white;
  background: white;
  color: #4fe5b3;

  &:hover {
    background-color: #4fe5b3;
    color: white;
    border: solid 1px #4fe5b3;
  }
`;
function Header() {

  //글쓰기버튼, 내 프로필사진

  return (
    <diStyledHeaderBody>
      <div>지수로그</div>
      <RightItems>

      </RightItems>
    </diStyledHeaderBody>
  )
}

export default Header
