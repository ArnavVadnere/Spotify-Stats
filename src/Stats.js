import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Stats({ token }) {
  const navigate = useNavigate();
  const [topArtists, setTopArtists] = useState([]);
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState({});
  const ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
  const ENDPOINTSONGS = "https://api.spotify.com/v1/me/top/tracks";
  const headers = {
    Accept: "application/json",
    Authorization: "Bearer " + token,
    "Content-Type": "application/json",
  };

  useEffect(() => {
    
    if (token === "") {
      navigate("/");
      return;
    }
    else{
      getTopArtists();
      getTopSongs();
    }

    return;
  }, [token]);

  const getTopSongs = async () => {
    await axios
      .get(ENDPOINTSONGS, {
        params: { limit: 500, offset: 0 },
        headers: headers,
      })
      .then((response) => {
        const data = response.data.items;
        setData({ data });

        { 
              console.log("INSFSF");
              console.log(data);
              getArraySongs(data);
        }
      });
  };

  const getArraySongs = async (data) => {
    createDivsSongs();

    var topSongs = [];
    //populate divs with paragraphs
    for (let i = 0; i < 50; i++) {
      topSongs[i] = data[i]["name"];

      const newP = document.createElement("p");

      const newContent = document.createTextNode(
        i +
          1 +
          ": " +
          JSON.stringify(topSongs[i], null, 2).replace(/^"(.+(?="$))"$/, "$1")
      );

      newP.appendChild(newContent);
      newP.setAttribute("id", "p" + i);
      if (i === 0) {
        top3FormatSongs(i, data, "zero");
      } else if (i === 1) {
        top3FormatSongs(i, data, "one");
      } else if (i === 2) {
        top3FormatSongs(i, data, "two");
      }

      document.getElementById("div" + i).appendChild(newP);
    }
  };

  const top3FormatSongs = async (i, data, idNum) => {

    const img = document.createElement("img");
    const link = data[i]["album"]["images"][0]["url"];

    img.setAttribute("src", link);
    img.setAttribute("id", idNum + "img");
    document.getElementById("div" + i).appendChild(img);
  };


  const getTopArtists = async () => {
    await axios
      .get(ENDPOINT, {
        params: { limit: 500, offset: 0 },
        headers: headers,
      })
      .then((response) => {
        const data = response.data.items;
        setData({ data });
        { 
              console.log(data);
              getArrayArtists(data);
        }
      });
  };

  function createDivsSongs() {
    for (let i = 0; i < 50; i++) {
      const main = document.createElement("p");
      main.setAttribute("id", "main");
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", "div" + i);

      const newContent = document.createTextNode("");

      newDiv.appendChild(newContent);

      document.getElementById("Songs").appendChild(newDiv);
    }
  }

  function createDivs() {
    for (let i = 0; i < 50; i++) {
      const main = document.createElement("p");
      main.setAttribute("id", "main");
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", "div" + i);

      const newContent = document.createTextNode("");

      newDiv.appendChild(newContent);

      document.getElementById("Artists").appendChild(newDiv);
    }
  }

  
  const top3Format = async (i, data, idNum) => {

    const img = document.createElement("img");
    const link = data[i]["images"][0]["url"];

    img.setAttribute("src", link);
    img.setAttribute("id", idNum + "img");
    document.getElementById("div" + i).appendChild(img);
  };

  const getArrayArtists = async (data) => {
    createDivs();

    var topArtists = [];
    //populate divs with paragraphs
    for (let i = 0; i < 50; i++) {
      topArtists[i] = data[i]["name"];

      const newP = document.createElement("p");

      const newContent = document.createTextNode(
        i +
          1 +
          ": " +
          JSON.stringify(topArtists[i], null, 2).replace(/^"(.+(?="$))"$/, "$1")
      );

      newP.appendChild(newContent);
      newP.setAttribute("id", "p" + i);
      if (i === 0) {
        top3Format(i, data, "zero");
      } else if (i === 1) {
        top3Format(i, data, "one");
      } else if (i === 2) {
        top3Format(i, data, "two");
      }

      document.getElementById("div" + i).appendChild(newP);
    }
    setTopArtists(topArtists);
  };
  return (
    <div className="Stats">
      
    </div>
  );
}
