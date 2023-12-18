import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Stats from "./Stats";
import { useNavigate } from "react-router-dom";

function Songs({ token }) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (token === "") {
  //     navigate("/");
  //     return;
  //   }

  //   return;
  // }, [token]);

  return (
    <div id="Songs">
      <Stats token={token} />
    </div>
  );
}
export default Songs;
