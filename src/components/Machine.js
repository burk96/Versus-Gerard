import React from "react";
import "./Machine.css";

import Actor from "./Actor";
import ActorList from "./ActorList.json";

const Machine = ({ gardCount, setGardCount, otherCount, setOtherCount }) => {
  // This is stupid
  const { name, picture } =
    gardCount + otherCount < ActorList.length - 1
      ? ActorList[gardCount + otherCount + 1]
      : ActorList[0];
  return (
    <div id="Machine">
      <Actor
        name={"Gerard Butler"}
        picture={
          "https://deadline.com/wp-content/uploads/2018/10/gerard-butler.jpg"
        }
        clickFunction={setGardCount}
        count={gardCount}
      />
      <h1 style={{ textDecoration: "underline" }}>OR</h1>
      <Actor
        name={name}
        picture={picture}
        clickFunction={setOtherCount}
        count={otherCount}
      />
    </div>
  );
};

export default Machine;
