import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import hash from "./hash";
import { authEndpoint, clientId, redirectUri, scopes } from "./config_example";

function Home() {
  const [token, setToken] = useState(null);

  const handleSetMessage = (token) => {
    setToken(token)
}
const MessageContext = React.createContext("");


  useEffect(() => {
    var mToken = hash.access_token;
    if (mToken) {
      setToken(mToken);
    }
  });
  return <MessageContext.Provider> value={{setToken: handleSetMessage}}

    <div className="Home">
      <div id="info">
        <h2>Your Spotify Stats{token}</h2>
        <p>
          Get Statistcs about your top artists, songs and genres from Spotify.
        </p>
      </div>

      <div id="token">
        <button id="button">
          <i className="fa fa-spotify"></i>
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
              "%20"
            )}&response_type=token&show_dialog=true`}
          >
            Login to Spotify
            {console.log("Token: " + token)}
          </a>
        </button>
      </div>
    </div>
    </MessageContext.Provider>
}
export default Home;
