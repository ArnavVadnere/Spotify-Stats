import React, { useState, useEffect } from "react";
import "./Stats.css";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function Stats({ token }) {
  const navigate = useNavigate();
  const [topArtists, setTopArtists] = useState([]);
  const [data, setData] = useState({});
  const ENDPOINT = "https://api.spotify.com/v1/me/top/artists";
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
    return;
  }, [token]);

  const getTopArtists = async () => {
    await axios
      .get(ENDPOINT, {
        params: { limit: 500, offset: 0 },
        headers: headers,
      })
      .then((response) => {
        const data = response.data.items;
        setData({ data });
        // console.log(response.data.items);

        {
          getArrayArtists(data);
        }
      });
  };

  function createDivs() {
    //create divs

    let div = document.createElement('div');
    div.id = 'mainDiv';
    div.innerHTML = '';
    document.body.appendChild(div);

    for (let i = 0; i < 50; i++) {
      const main = document.createElement("p");
      main.setAttribute("id", "main");
      const newDiv = document.createElement("div");
      newDiv.setAttribute("id", "div" + i);

      const newContent = document.createTextNode("");

      newDiv.appendChild(newContent);

      document.getElementById("mainDiv").appendChild(newDiv);
    }
  }

  const top3Format = async (i, data, idNum) => {
    var element = document.getElementById("div" + i);

    const img = document.createElement("img");
    const link = data[i]["images"][0]["url"];

    img.setAttribute("src", link);
    img.setAttribute("id", idNum + "img");
    document.getElementById("div" + i).appendChild(img);
    // element.images.resi resive image
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
      {getTopArtists()}
    </div>
  );
}
