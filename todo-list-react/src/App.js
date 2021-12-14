import {useState} from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';



function App() {
  const [todayOpen, setTodayOpen] = useState(true);
  const [tomorrowOpen, setTomorrowOpen] = useState(true);

  const viewHandler = (e) => {
    switch (e.target.name) {
      case "today":
        setTodayOpen(true);
        setTomorrowOpen(false);
        break;
      case "tomorrow":
        setTodayOpen(false);
        setTomorrowOpen(true);
        break;
      case "both":
        setTodayOpen(true);
        setTomorrowOpen(true);
        break;
    }
  }
  return (
    <div className="App">
      <Header />
      <Nav viewHandler={viewHandler}/>
      <Main todayOpen={todayOpen} tomorrowOpen={tomorrowOpen}/>
      <Footer />
    </div>
  );
}

export default App;
