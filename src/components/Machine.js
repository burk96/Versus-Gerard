import React from "react";
import "./Machine.css";

import Actor from "./Actor";

const Machine = () => {
  return (
    <div id="Machine">
      <Actor
        name={"Gerard Butler"}
        picture={
          "https://deadline.com/wp-content/uploads/2018/10/gerard-butler.jpg"
        }
      />
      <Actor
        name={"Jermey Renner"}
        picture={
          "https://www.theplace2.ru/cache/archive/jeremy_renner/img/20911b286214-gthumb-gwdata1200-ghdata1200-gfitdatamax.jpg"
        }
      />
    </div>
  );
};

export default Machine;
