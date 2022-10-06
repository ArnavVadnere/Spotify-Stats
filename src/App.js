import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./Home.js";
import Navbar from "./Navbar.js";
import Stats from "./Stats.js";
import Footer from "./Footer.js";
import Artists from "./artists.js"
import Songs from "./songs.js"


function App() {

  const [token, setToken] = useState("");
  const [visible, setVisible] = useState(false);


  return (
    <div className="App">
    <Router>
      <Navbar visible={visible} token={token}/>
      <Routes>
        <Route path="/" element={<Home setToken={setToken} token={token} setVisible={setVisible} visible={visible}/>} />
        <Route path="/artists" element={<Artists token={token} />} />
        <Route path="/songs" element={<Songs token={token} />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  </div>

  );
}

export default App;
