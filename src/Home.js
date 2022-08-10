import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import hash from "./hash";
import { authEndpoint, clientId, redirectUri, scopes } from "./config_example";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Footer from "./Footer.js";
import Stats from "./Stats";
import axios from "axios";


function Home({ setToken, token }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState({});
  let counter = 0;

  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    var mToken = hash.access_token;
    if (mToken) {
      setToken(mToken);
      {
        console.log("SET TOKEN COMPLETE");
        setVisible(true);
        if(counter < 3){
          getUserProfile();
          console.log("I JUST RAN");
        }
        counter++;
        // {<Footer />}
      }
    }
  });

  const getUserProfile = async () => {
    await axios
      .get("https://api.spotify.com/v1/me", {
        headers: headers,
      })
      .then((response) => {
        const data = response.data.items;
        setData({ data });
        console.log("User data: " + response);
      });
  };

  return (
    <div className="Home">
      <div id="info">
        <h2>Your Spotify Stats</h2>
        <p>{token}</p>
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
              <button id="button" onClick={() => { navigate("/artists") }}>Get Top Artists</button>
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
