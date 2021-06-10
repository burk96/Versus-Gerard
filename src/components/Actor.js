import React from "react";
import "./Actor.css";

const Actor = ({ name, picture }) => {
  return (
    <div id="Actor">
      <img src={picture} alt={name}></img>
      <h1>{name}</h1>
      <button>Choose</button>
    </div>
  );
};

export default Actor;
