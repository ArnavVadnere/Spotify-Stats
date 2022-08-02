import React, { useState, useEffect } from "react";
import './App.css';
import hash from "./hash";
import Stats from "./Stats.js";
import { authEndpoint, clientId, redirectUri, scopes } from "./config_example";
import { Route, Link } from 'react-router-dom';
import {Redirect} from 'react-router-dom';

function Home() {
    const [token, setToken] = useState(null);


    useEffect(() => {
        var mToken = hash.access_token;
        if (mToken) {
            setToken(mToken);
        }

    })
    return (
        <div className="Home">


            <div id="info">
                <h2>Your Spotify Stats</h2>
                <p>Get Statistcs about your top artists, songs and genres from Spotify.</p>
            </div>

            <div id="token">
                {!token && (
                    <button id="button"><i className="fa fa-spotify"></i>
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
            </div>
        </div>
    );
}

export default Home;