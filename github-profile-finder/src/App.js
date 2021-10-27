import axios from "axios";
import { useState } from "react";
import Profile from "./Profile";
import ProfileInput from "./ProfileInput";

function App() {
  const [user, setUser] = useState("");
  const [info, setInfo] = useState({});

  const onSubmit = async (e) => {
    //submit하면 기본적으로 새로고침되기때문에 이를 막자
    e.preventDefault();
    if (!user) setInfo("사용자가 없습니다.");
    if (user === "") {
      setOpen(false);
    }
    const { data } = await axios.get(`https://api.github.com/users/${user}`);
    //data받아올 때 시간이 걸림 -> 비동기처리가필요 -> async await
    //axios는 서버통신을 도와주는 툴. REST API의 한 종류.
    setOpen(true);
    setInfo(data);
  };

  const [open, setOpen] = useState(false);
  const onClickClose = () => {
    setOpen(false);
  };

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
      <Profile
        user={user}
        info={info}
        open={open}
        onClickClose={onClickClose}
      />
    </div>
  );
}

export default App;
