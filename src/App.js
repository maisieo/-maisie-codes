import "./App.scss";
import Home from "./components/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" index element={<Home/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
