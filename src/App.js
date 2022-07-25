import React, { useState, useEffect } from "react";
import './App.css';
import hash from "./hash";
import Stats from "./Stats.js";
import { authEndpoint, clientId, redirectUri, scopes } from "./config_example";


function App() {

  const [token, setToken] = useState(null);



  useEffect(() => {
    var mToken = hash.access_token;
    if (mToken) {
      setToken(mToken);
    }

  })
  return (
    <div className="App">
      <body className="App-body">
        {!token && (
          <button>
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
        {token && (
          <Stats token={token} />
        )}
      </body>
    </div>
  );
}

export default App;
