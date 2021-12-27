import React, { useState } from 'react';
import styled from "styled-components";


//input에 따라 가져온 유저정보는 profileBox에도 필요 공통부모인 App에서 userInfo를 관리해주는 것이 적절하다. 

//input태그를 form태그로 감싸고 onSubmit 속성을 사용하여 검색할 수 있게하자.
function ProfileInput({ getUserInfo }) {
  const [user, setUser] = useState("");
  const [userList, setUserlist] = useState([]);
  const MAX_NUM = 3;

  const onChange = (e) => {
    setUser(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    //userApi 받아오는 함수
    getUserInfo(user);
  }

  const setNewUserList = () => {
    if (userList.length >= MAX_NUM) {
      // 3개 초과일때
      return [...userList, user].slice(1, 4);
    }
    // 3개 이하일때
    return [...userList, user];
  };

  const newUserList = setNewUserList(); //새로운 히스토리목록

  setUserList(newUserList); //useState로 재렌더링되게.
  // localStorage에 저장하기
  localStorage.setItem("userList", JSON.stringify(newUserList));
  // localStorage는 모든 데이터를 string으로 변환해버림. 
  //JSON 형태로 저장하고(직렬화) 읽어와야(역직렬화) 기본 상태를 유지할 수 있다.

  setUser("");



  return (
    <SearchBox id="profileFinder">
      <Title>Github Profile Finder</Title>
      <form onSubmit={handleSubmit}>
        <SearchInput
          placeHolder="github 프로필을 검색해보세요"
          value={user}
          onChange={onChange}
          type="text" />
        <History user={user} getUserInfo={getUserInfo} userList={userList} />
      </form>
    </SearchBox>
  )
}


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
