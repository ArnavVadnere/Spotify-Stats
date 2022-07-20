import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function Stats({ token }) {
    const [topTracks, setTopTracks] = useState([]);
    const [topTracksActivated, setTopTracksActivated] = useState(false);
    const [topArtists, setTopArtists] = useState([]);
    const [topArtistsActivated, setTopArtistsActivated] = useState(false);

    const getTopArtists = async (token) => {
        const headers = {
            "Authorization": "Bearer " + token
        };
        await axios.get("https://api.spotify.com/v1/me/top/artists", { headers }).then((response) => {
            const topArtists = response.data;
            console.log("HELLO");
            this.setState({ topArtists });
    
        })
    }
return(
    <div>
        <p>"YO" {topArtists}</p>
    </div>
)
}

