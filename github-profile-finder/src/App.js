import axios from "axios";
import { useState } from "react";
import Profile from "./ProfileBox";
import ProfileInput from "./ProfileInput";

function App() {
  const [user, setUser] = useState("");
  const [data, setData] = useState({});
  const onSubmit = async (e) => {
    //submit하면 기본적으로 새로고침되기때문에 이를 막자
    e.preventDefault();
    if (!user) return;
    const { data } = await axios.get(`https://api.github.com/users/${user}`);
    //data받아올 때 시간이 걸림 -> 비동기처리가필요 -> async await
    //axios는 서버통신을 도와주는 툴. REST API의 한 종류.
    console.log(data);
    console.log(data.url); //깃헙링크
    console.log(data.bio); //소개
    console.log(data.following); //팔로잉 - url도 얻을수있어
    console.log(data.followers); //팔로워 - url도 가능
    setData(data);
  };
  return (
    <div>
      <ProfileInput user={user} setUser={setUser} onSubmit={onSubmit} />
      <Profile user={user} data={data} />
    </div>
  );
}

export default App;
