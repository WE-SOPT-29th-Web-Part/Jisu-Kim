import { useState } from "react";
import "./App.css";
import CenterText from "./components/CenterText";
import DateInput from "./components/DateInput";
import Footer from "./components/Footer";
import Header from "./components/Header"
import Result from "./components/Result";


// js => jsx문법이 들어가지 않은 파일. 함수정의 또는 상수를 정의하는 파일.
// jsx => jsx문법이 들어간 컴포넌트
// 이렇게 파일 정리해주면 한눈에 보기 좋음. 어떤게 컴포넌트인지아닌지


//datainput에서 input값으로 년, 월, 일을 받아온다.
//result에서 input값과, dateInput에서 받아온 년, 월, 일으로 연산을 실시한다. 

function App() {

  //new Date 객체는 지금 이 순간의 시간이 찍힌다.
  //new Date에서 getFullYear가져오면 지금 날짜의 년도를 가져온다.
  const [year, setYear] = useState(new Date().getFullYear());
  //자스에선 Month가 0월부터시작.
  const [month, setMonth] = useState(new Date().getMonth()+1);
  const [day, setDay] = useState(new Date().getDate());

  return (
    <div id="app">
    <Header />
    <DateInput year={year} month={month} day={day} setYear={setYear} setMonth={setMonth} setDay={setDay}/>
    <CenterText />
    <Result year={year} month={month} day={day} setYear={setYear} setMonth={setMonth} setDay={setDay}/>
    <Footer />
    </div>
  );
}

export default App;
