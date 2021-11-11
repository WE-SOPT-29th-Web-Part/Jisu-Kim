import axios from "axios";
import { useState } from "react";
import Result from "./Result";
import ProfileInput from "./ProfileInput";
import styled from "styled-components";

function App() {
  const [userInfo, setUserInfo] = useState({status: 'idle',  data:null});
  
  const getUserInfo = async (user) => {
    setUserInfo({...userInfo, status: "pending"}); // 정보 가져오고있을 때
    try {
      const {data} = await axios.get(`https://api.github.com/users/${user}`);
      setUserInfo({...userInfo, status: "resolved", data: data});
    } catch(e) {
      setUserInfo({...userInfo, status: "rejected", data: null});
    }
  };

  // const onSubmit = async (e) => {
  //   //submit하면 기본적으로 새로고침되기때문에 이를 막자
  //   e.preventDefault();
  //   //인풋 비어있는데 입력하면 닫히기
  //   if (user === "") {
  //     setOpen(false);
  //     return;
  //   }
  //   //로딩중 화면 띄워주기 -- 왜 안될까? -> await안해줘서그랬음
  //   setLoading(true);
  //   //왜 async await 써야만 setLoading(true)가 먹을까? - 질문하기
  //   await axios
  //     .get(`https://api.github.com/users/${user}`, {
  //       headers: {
  //         Authorization: "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",
  //       },
  //     })
  //     .then((result) => {
  //       setInfo(result.data);
  //       setOpen(true);
  //       setUserResult(true);
  //       setLoading(false);
  //     })
  //     .catch(() => {
  //       setUserResult(false);
  //       setInfo({
  //         name: "사용자를 찾을 수 없습니다",
  //       });
  //     });
  //   setOpen(true);
  //   setLoading(false);
  //   //data받아올 때 시간이 걸림 -> 비동기처리가필요 -> async await
  //   //axios는 서버통신을 도와주는 툴. REST API의 한 종류.
  // };

  // const [open, setOpen] = useState(false);
  // const onClickClose = () => {
  //   setOpen(false);
  // };

  

  // const LoadingUI = styled.div`
  //   width: 24.375rem;
  //   height: 550px;
  //   display: flex;
  //   flex-direction: column;

  //   padding: 15rem 0;
  //   margin: 1rem auto;
  //   border-radius: 8px;

  //   background-color: #454545;
  //   transition: ease 400ms;

  //   color: whitesmoke;
  //   font-size: 1.5rem;
  //   font-weight: 600;
  //   text-align: center;
  // `;

  return (
    <div>
      <ProfileInput
        getUserInfo={getUserInfo}
      />
      <Result
        userInfo={userInfo} setUserInfo={setUserInfo}
      />
    </div>
  );
}

export default App;
