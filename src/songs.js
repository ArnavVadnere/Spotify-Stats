import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Stats from "./Stats";



function Songs({ token }) {


  return (
   <div id="Songs">
    <Stats token={token}/>
   </div>


  );
}
export default Songs;
