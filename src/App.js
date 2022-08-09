import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import Stats from "./Stats.js";
import Footer from "./Footer.js";


function App() {

  const [token, setToken] = useState("");

  return (
    <div className="App">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home setToken={setToken} token={token}  />} />
        <Route path="/artists" element={<Stats token={token} />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </div>

  );
}

export default App;
