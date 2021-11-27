import React from 'react';
import styled from 'styled-components';
import profileImage from '../../assets/images/cherryblossom.jpg';
import { ReactComponent as GithubLogo } from '../../assets/icons/github.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email.svg';
import { ReactComponent as HomeIcon } from '../../assets/icons/home.svg';

const StyledRoot = styled.div`
  margin: 4rem auto;
  
`;

const ProfileBox = styled.div`

`
const GithubBtn = styled(GithubLogo)`
  margin-left: 0.5rem;
  cursor: pointer;
  fill: grey;
  &:hover {
    fill: black;
  }
`;
const EmailBtn = styled(EmailIcon)`
  margin-left: 0.5rem;
  cursor: pointer;
  fill: grey;
  &:hover {
    fill: black;
  }
`;
const HomeBtn = styled(HomeIcon)`
  margin-left: 0.5rem;
  cursor: pointer;
  fill: grey;
  &:hover {
    fill: black;
  }
`;

const ProfileImg = styled.img`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
`;

const UserName = styled.h2`
  font-size: 2rem;
`;

function Profile() {
  return (
    <StyledRoot>
      <ProfileBox>
        <ProfileImg src={profileImage} />
        <UserName>김지수</UserName>
        <GithubBtn width="2rem" />
        <EmailBtn width="2rem" />
        <HomeBtn width="2rem" />
      </ProfileBox>
    </StyledRoot>
  )
}

export default Profile
