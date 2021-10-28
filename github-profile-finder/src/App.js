import axios from "axios";
import { useState } from "react";
import Profile from "./Profile";
import ProfileInput from "./ProfileInput";
import styled from "styled-components";

function App() {
  const [user, setUser] = useState("");
  const [info, setInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [userResult, setUserResult] = useState(false);

  const onSubmit = async (e) => {
    //submit하면 기본적으로 새로고침되기때문에 이를 막자
    e.preventDefault();
    if (user === "") {
      setOpen(false);
    }
    //로딩중 화면 띄워주기 -- 왜 안될까?
    setLoading(true);
    axios
      .get(`https://api.github.com/users/${user}`, {
        headers: {
          Authorization: "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",
        },
      })
      .then((result) => {
        console.log(loading);
        setInfo(result.data);
        setOpen(true);
        setUserResult(true);
        setLoading(false);
        console.log(loading);
      })
      .catch(() => {
        setUserResult(false);
        setInfo({
          name: "사용자를 찾을 수 없습니다",
        });
      });
    setOpen(true);
    setLoading(false);
    //data받아올 때 시간이 걸림 -> 비동기처리가필요 -> async await
    //axios는 서버통신을 도와주는 툴. REST API의 한 종류.
  };

  const [open, setOpen] = useState(false);
  const onClickClose = () => {
    setOpen(false);
  };

  const DefaultMsg = styled.h3`
    color: whitesmoke;
    text-align: center;
    margin: 5rem auto;
  `;

  const LoadingUI = styled.div`
    width: 24.375rem;
    height: 550px;
    display: flex;
    flex-direction: column;

    padding: 15rem 0;
    margin: 1rem auto;
    border-radius: 8px;

    background-color: #454545;
    transition: ease 400ms;

    color: whitesmoke;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
  `;

  return (
    <div>
      <ProfileInput
        user={user}
        setUser={setUser}
        onSubmit={onSubmit}
        onClickClose={onClickClose}
        open={open}
        setOpen={setOpen}
      />
      {loading ? (
        <LoadingUI> 사용자를 찾는 중 🧐</LoadingUI>
      ) : open ? (
        <Profile
          user={user}
          info={info}
          onClickClose={onClickClose}
          userResult={userResult}
        />
      ) : (
        <DefaultMsg>검색어를 입력해보세요</DefaultMsg>
      )}
    </div>
  );
}

export default App;
