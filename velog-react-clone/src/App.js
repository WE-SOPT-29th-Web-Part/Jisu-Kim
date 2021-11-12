import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./pages/Home"
import Write from "./pages/Write"
import NotFound from "./pages/PagesNotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" component={() => <Home/>}/>
          <Route exact path="/write" component={() => <Write />}/>
          <Route component={() => <NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
