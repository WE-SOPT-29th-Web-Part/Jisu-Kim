import { useState } from "react";
import "./App.css";

function App() {
  const { count, setCount } = useState(0);
  //React에서 상태를 정의하는 방법.

  const handleClick = () => {
    setCount((count) => count + 1);
  };
  return (
    <div className="App">
      <span>{count}</span>
      <button> + </button>
      <button> - </button>
    </div>
  );
}

export default App;
