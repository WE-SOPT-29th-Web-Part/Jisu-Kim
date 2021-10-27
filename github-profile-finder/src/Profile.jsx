
import styled from "styled-components";

//id가있으면 프로필이 뜨고, 없으면 프로필이 없다고 떠야함




function Profile({ info, user, open, onClickClose }) {
  return (
    <>
      {open===true ? 
        (<ProfileBox>
          <CloseBtn onClick={onClickClose}>X</CloseBtn>
          <UserName href={info.html_url}>{user}</UserName>
          <ProfileImg src={info.avatar_url} />
          <NickName>{info.name}</NickName>
          <ProfileBio>{info.bio || "자기소개가 없습니다"}</ProfileBio>
          <FollowBox>
            <FollowBtn>
              팔로워 {info.followers}명
            </FollowBtn>
            <FollowBtn>
              팔로잉 {info.following}명
            </FollowBtn>
            <FollowBtn>repo {info.public_repos}개</FollowBtn>
          </FollowBox>
        </ProfileBox>) : (<DefaultMsg>검색어를 입력해보세요</DefaultMsg>)
      }
    </>
  );
}

const DefaultMsg = styled.h3`
  color: whitesmoke;
  text-align: center;
  margin: 5rem auto;
`;

const ProfileBox = styled.div`
  width: 24.375rem;
  display: flex;
  flex-direction: column;

  padding: 1rem;
  margin: 1rem auto;
  border-radius: 8px;

  background-color: #454545;
`;

const CloseBtn = styled.button`
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: dimgrey;
  color: whitesmoke;
  font-size: 1rem;
  position: relative;
  top: 0;
  cursor: pointer;
  &:hover {
    background-color: grey;
  }
`;

const UserName = styled.a`
  color: rgb(255, 255, 255);
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin: 0.875rem;
  text-decoration: none;
  &visited {
    color: inherit;
  }
`;

const NickName = styled.h3`
  color: whitesmoke;
  font-size: 1.25rem;
  text-align: center;
  margin: 0.5rem;
`;

const ProfileImg = styled.img`
  width: 60%;
  border-radius: 50%;
  border: solid 2px lightgrey;
  margin: 1rem auto;
`;

const ProfileBio = styled.p`
  color: lightgrey;

  margin: 1rem;
  padding: 1rem;
  border-radius: 2px;
`;

const FollowBtn = styled.button`
  text-align: center;
  padding: 0.675rem 0.5rem;
  width: 6rem;
  border: none;
  border-radius: 4px;
  outline: none;
  background-color: rgb(65 225 148);
  color: white;
  font-size: .875rem;
  text-decoration: none;

  &:hover {
    background-color: rgb(68, 248, 161);
  }
`;

const FollowBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  padding: 1rem 0;
`;



export default Profile;
