import React, { useState, useEffect } from "react";
import './Stats.css';
import axios from 'axios';

export default function Stats({ token }) {
    // const [topTracks, setTopTracks] = useState([]);
    // const [topTracksActivated, setTopTracksActivated] = useState(false);
    const [topArtists, setTopArtists] = useState([]);
    // const [topArtistsActivated, setTopArtistsActivated] = useState(false);
    const [data, setData] = useState({});
    const ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
    const headers = {
        Accept: 'application/json',
            Authorization: 'Bearer ' + token,
            'Content-Type': 'application/json'
    };
    

    const getTopArtists = async (token) => {
        

        await  axios
        .get(ENDPOINT, {
          params: { limit: 500, offset: 0 },
          headers: headers,
        })
        .then((response) => {
            const data = response.data.items;
            // console.log(response.data);
            setData({ data });
            console.log(response.data.items);
            {getArrayArtists(data)}
        })
    }
    
    const getArrayArtists = async (data) => {
        var topArtists = [];
        var size = 5;
        for (let i = 0; i < 50; i++){
            const newDiv = document.createElement("div");
            newDiv.setAttribute("id", i);

            const newContent = document.createTextNode("");

            newDiv.appendChild(newContent);

            const currentDiv = document.getElementById("maindiv");
            document.body.insertBefore(newDiv, currentDiv);
        }

        for (let i = 0; i < 50; i++){
            topArtists[i] = data[i]['name'];

            const newP = document.createElement("p")

            const newContent = document.createTextNode((JSON.stringify(topArtists[i], null, 2)).replace(/^"(.+(?="$))"$/, '$1'));
            newP.appendChild(newContent);

            const currentDiv = document.getElementById(i);

            document.getElementById(i).appendChild(newP);

        }
        setTopArtists(topArtists);


    }
return(
    <div>
        <h1>Top Artists</h1>
        <button onClick={getTopArtists}>  
        {/*make button disapear*/ }
            Get Artists
        </button>
    </div>
)
}

