import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Stats from "./Stats";



function Artists({ token }) {


  return (
   <div id="Artists">
    <Stats token={token}/>
   </div>


  );
}
export default Artists;
