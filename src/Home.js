import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import hash from "./hash";
import { authEndpoint, clientId, redirectUri, scopes } from "./config_example";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./Footer.js";
import Stats from "./Stats";

function Home({ setToken, token }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    var mToken = hash.access_token;
    if (mToken) {
      setToken(mToken);
      {
        console.log("SET TOKEN COMPLETE");
        setVisible(true);

        // hide login button and show 3 buttons
        // {<Footer />}
      }
    }
  });

  return (
    <div className="Home">
      <div id="info">
        <h2>Your Spotify Stats</h2>
        <p>
          Get Statistcs about your top artists, songs and genres from Spotify.
        </p>
      </div>

      <div id="token">
        {!visible && (
          <button id="button">
            <i className="fa fa-spotify"></i>
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
                "%20"
              )}&response_type=token&show_dialog=true`}
            >
              Login to Spotify
            </a>
          </button>
        )}

        {visible && (
          <div className="newButtons">
            <div>
              <button id="button">Get Top Artists</button>
            </div>
            <div>
              <button id="button">Get Top Songs</button>
            </div>
            <div>
              <button id="button">Get Top Genres</button>
            </div>
          </div>
        )}
      </div>
    </div>

    
  );
}
export default Home;
