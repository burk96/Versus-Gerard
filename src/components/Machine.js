import React from "react";
import "./Machine.css";

import Actor from "./Actor";
import ActorList from "./ActorList.json";

const Machine = ({ gardCount, setGardCount, otherCount, setOtherCount }) => {
  const { name, picture } = ActorList[0];
  return (
    <div id="Machine">
      <Actor
        name={"Gerard Butler"}
        picture={
          "https://deadline.com/wp-content/uploads/2018/10/gerard-butler.jpg"
        }
        clickFunction={setGardCount}
      />
      <h1 style={{ textDecoration: "underline" }}>OR</h1>
      <Actor name={name} picture={picture} clickFunction={setOtherCount} />
    </div>
  );
};

export default Machine;
