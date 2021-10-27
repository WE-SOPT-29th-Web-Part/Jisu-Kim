import React, { useState } from 'react';
import styled from "styled-components";
import History from './History';


//input히스토리 최대 3개까지 뜬다.
//히스토리 누르면 다시그 프로필박스가 뜬다.


//input에 따라 가져온 유저정보는 profileBox에도 필요 공통부모인 App에서 userInfo를 관리해주는 것이 적절하다. 

function ProfileInput() {
  const [user, setUser] = useState('');
  
  const onChange = (e) => {
    setUser(e.target.value);
  }
  return (
    <SearchBox id="profileFinder">
      <Title>Github Profile Finder</Title>
      <SearchInput placeHolder="github 프로필을 검색해보세요" value={user} onChange={onChange} type="text"/>
      <History />
    </SearchBox>

  )
}

const Title = styled.h1`
  margin: 0;
  color: rgb(76, 243, 162);
  font-weight: 600;
`;

const SearchInput = styled.input`
  margin-top: 1rem;
  padding: 0.6rem 1rem;
  width: 15rem;

  outline: none;
  border: none;
  border-radius: 4px;
  background-color: #454545;

  font-size: 1rem;
  color: white;

  & :hover {
    background-color: #5e5e5e;
    border: solid 1.5px #5e5e5e;
    }
  &:focus{
    background-color: #5e5e5e;
    border: solid 1.5px grey;
  }
`;

const SearchBox = styled.div`
  display: flex;
  margin: auto auto;
  justify-content: center;
  flex-direction: column;
  margin-top: 3rem;
  align-items: center;
`;
export default ProfileInput;
