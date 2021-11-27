import React from 'react'
import styled from 'styled-components';

const DefaultMsg = styled.h3`
    color: whitesmoke;
    text-align: center;
    margin: 5rem auto;
  `;

const StyledSpin = styled.div`
  width: 50px;
  height: 50px;
  border: 8px solid #1b1d21;
  border-radius: 50%;
  border-right-color: white;
  text-align: center;
  margin: 0 auto;

  animation: spin 500ms linear 0s infinite normal none;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

function PendingProfile() {
  return (
    <>
      <DefaultMsg>
        사용자를 찾는 중 🧐
      </DefaultMsg>
      <StyledSpin />
    </>
  )
}

export default PendingProfile
