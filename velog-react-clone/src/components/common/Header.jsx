import React from 'react'
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/icons/search.svg';
import { ReactComponent as DropDownIcon } from '../../assets/icons/dropdown_arrow.svg';
import { Link } from 'react-router-dom'
import profileImage from '../../assets/images/cherryblossom.jpg';

const StyledHeaderBody = styled.header`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  height: 4rem;
  box-shadow: 0rem 0.25rem 0.625rem rgba(0, 0, 0, 0.05);
`;

const RightItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const WriteLink = styled.button`
  margin-right: 1rem;
  padding: 4px 12px;
  border: solid 2px white;
  background: white;
  color: #4fe5b3;
  border-radius: 2rem;
  font-weight: 600;
  transition: ease-in 300ms;
  border: 1px solid #4fe5b3;

  &:hover {
    background-color: #4fe5b3;
    color: white;
    border: solid 1px #4fe5b3;
  }
`;

const ProfileImg = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`;

const SearchIcons = styled(SearchIcon)`
  stroke: grey;
  &:hover {
    stroke: black;
  }
`;

const SearchBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
\
`;



function Header() {
  //글쓰기버튼, 내 프로필사진

  return (
    <StyledHeaderBody>
      <div>지수로그</div>
      <RightItems>
        <Link to="/write"><WriteLink>글 쓰기</WriteLink></Link>
        <SearchBtn><SearchIcons width="20px" /></SearchBtn>
        <ProfileImg src={profileImage} />
        <DropDownIcon width="20px" />
      </RightItems>
    </StyledHeaderBody>
  )
}

export default Header
