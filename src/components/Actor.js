import React from "react";
import "./Actor.css";

const Actor = ({ name, picture, clickFunction }) => {
  return (
    <div id="Actor">
      <img src={picture} alt={name} height="400px" width="500px"></img>
      <h1>{name}</h1>
      <button onClick={clickFunction}>Choose</button>
    </div>
  );
};

export default Actor;
