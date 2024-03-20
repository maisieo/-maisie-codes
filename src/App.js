import "./App.scss";
import React from "react";
import EmailBuilds from "./components/Home/EmailBuilds/EmailBuilds";
import Home from "./components/Home/Home";
import About from "./components/Home/About/About";
import LiveWebsites from "./components/Home/LiveWebsites/LiveWebsites";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter scrollRestoration='auto'>
      <div className="App">
        <Routes>
          <Route path="/" index element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/live-client-websites" index element={<LiveWebsites/>} />
          <Route path="/email-builds" index element={<EmailBuilds/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
