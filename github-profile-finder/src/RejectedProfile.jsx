import React from 'react'
import styled from 'styled-components';

const ProfileBox = styled.div`
  width: 24.375rem;
  height: 550px;
  display: flex;
  flex-direction: column;

  padding: 1rem;
  margin: 1rem auto;
  border-radius: 8px;

  background-color: #454545;
  transition: ease 400ms;
`;


const DefaultMsg = styled.h3`
    color: whitesmoke;
    text-align: center;
    margin: 5rem auto;
  `;

function RejectedProfile() {
  return (
    <ProfileBox>
      <DefaultMsg>
        사용자를 찾을 수 없습니다 (˘･_･˘)
      </DefaultMsg>
    </ProfileBox>
  )
}

export default RejectedProfile
