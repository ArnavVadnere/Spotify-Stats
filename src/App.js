import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./views/Home.js";
import Navbar from "./components/Navbar.js";
import Stats from "./views/Stats.js";
import Footer from "./components/Footer.js";
import Artists from "./artists.js";
import Songs from "./views/songs.js";
import Genres from "./views/genres";

function App() {
  const [token, setToken] = useState("");
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <Router>
        <Navbar visible={visible} token={token} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setToken={setToken}
                token={token}
                setVisible={setVisible}
                visible={visible}
              />
            }
          />
          <Route path="/artists" element={<Artists token={token} />} />
          <Route path="/songs" element={<Songs token={token} />} />
          <Route path="/genres" element={<Genres token={token} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
