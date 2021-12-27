import React from 'react';
import styled from 'styled-components';



//input히스토리 최대 3개까지 뜬다.
//히스토리 누르면 다시그 프로필박스가 뜬다.
function History({ userList, setUserList, getUserInfo }) {

  const handleClick = (user) => {
    getUserInfo(user);
  }

  const handleRemove = (user) => {
    const newUserList = userList.filter((userId) => userId !== user);
    setUserList(newUserList);
    localStorage.setItem("userList", JSON.stringify(newUserList));
  }

  return (
    <HistoryBox>
      {userList && userList.map((user) => (
        <HistoryList key={user}>
          <span onClick={() => handleClick(user)}>{user}</span>
          <button onClick={() => handleRemove(user)}>X</button>
        </HistoryList>))}
    </HistoryBox>
  )
}

const HistoryBox = styled.div`
  position: relative;
  top: 0;
  right: 0;
  width: 15rem;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  color: white;
  width: 15rem;
  background-color: #454545;
  border-radius: 2px;
`;

const HistoryList = styled.ul`
  list-style: none;
  color: whitesmoke;
  padding: 0;
  margin: 0;
`;

export default History;
