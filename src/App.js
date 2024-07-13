import React from "react";
import "./App.scss";
import Main from "./containers/Main";
import Stuber from "./components/personalProjects/Stuber";
import Portol from "./components/personalProjects/Portol";
import LifePilot from "./components/personalProjects/Lifepilot";
import Stretchify from "./components/personalProjects/Stretchify";
import { HashRouter as Router, Routes, Route } from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/stuber" element={<Stuber />} />
          <Route path="/portol" element={<Portol />} />
          <Route path="/lifepilot" element={<LifePilot />} />
          <Route path="/stretchify" element={<Stretchify />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
