import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Stats from "./Stats";

function Genres({ token }) {
  return (
    <div id="Genres">
      <Stats token={token} />
    </div>
  );
}
export default Genres;
