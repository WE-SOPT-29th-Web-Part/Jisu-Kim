import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Write from "./pages/Write"
import NotFound from "./pages/PagesNotFound";
import SeriesTab from "./pages/SeriesTab";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}>
            <Route path="/" element={<SeriesTab />} />
          </Route>
          <Route path="/write" element={<Write />}/>
          <Route path="/*" element={<NotFound />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
