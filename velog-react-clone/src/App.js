import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Write from "./pages/Write"
import ArticleContainer from "./components/home/ArticleContainer";
import SeriesContainer from "./components/home/SeriesContainer";
import Header from "../src/components/common/Header"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/" element={<ArticleContainer />} />
            <Route path="/series" element={<SeriesContainer />} />
          </Route>
          <Route path="/write" element={<Write />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
