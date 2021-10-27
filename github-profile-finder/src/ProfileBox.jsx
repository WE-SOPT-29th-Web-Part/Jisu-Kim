import React from 'react';
import styled from 'styled-components';


//id가있으면 프로필이 뜨고, 없으면 프로필이 없다고 떠야함

function Profile() {
  return (
    <ProfileBox>
      
    </ProfileBox>
  )
}

const ProfileBox = styled.div`
  width: 24.375rem;
  display: flex;
  flex-direction: column;

  padding:0.5rem;
  margin: 1rem auto;
  border-radius: 8px;
  
  background-color: #454545;

`;

export default ProfileBox;
