import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Stats from "./Stats";
import { useNavigate } from "react-router-dom";



function Artists({ token }) {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (token === "") {
  //     navigate("/");
  //     return;
  //   }
  
  //   return;
  // }, [token]);
  
  return (
   <div id="Artists">
    <Stats token={token}/>
   </div>


  );
}
export default Artists;
