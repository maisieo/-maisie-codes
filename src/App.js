import "./App.css";
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
        <form
        name="contact v1"
        method="post"
        data-netlify="true"
        onSubmit="submit"
      >
        <input type="hidden" name="form-name" value="contact v1"></input>

        <div>
          <label>
            first name<input type="text" name="first-name"></input>
          </label>
        </div>
        <div>
          <label>
            email<input type="email" name="email"></input>
          </label>
        </div>
        <div>
          <label>
            Any comments?<textarea name="comments"></textarea>
          </label>
        </div>
        <button type="submit">Submit the results</button>
      </form>
      </div>
    </BrowserRouter>
  );
}

export default App;
