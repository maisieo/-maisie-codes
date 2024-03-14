import "./App.scss";
import Home from "./components/Home/Home";
import LiveWebsites from "./components/Home/LiveWebsites/LiveWebsites"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="/live-client-websites" index element={<LiveWebsites/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
