import React from 'react';
import Profile from './Profile';
import PendingProfile from './PendingProfile';
import RejectedProfile from './RejectedProfile';
import styled from 'styled-components';

const DefaultMsg = styled.h3`
    color: whitesmoke;
    text-align: center;
    margin: 5rem auto;
  `;

function Result({ userInfo, setUserInfo }) {
  switch (userInfo.status) {
    case 'pending':
      return <PendingProfile />;
    case 'resolved':
      return <Profile data={userInfo.data} userInfo={userInfo} setUserInfo={setUserInfo} />;
    case 'rejected':
      return <RejectedProfile />;
    case 'idle':
    default:
      return <DefaultMsg>검색어를 입력해보세요(´▽`ʃ♡ƪ)</DefaultMsg>;
  }
};

export default Result;
