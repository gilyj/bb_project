import React, { useState } from "react";
import "./MenuMo.css";
const MenuMo = (props) => {
  const menuStyle = props.onVisible ? "left: 0" : "left: -100%";

  console.log(menuStyle);
  return (
    <div className="menu-wrap" style={{ menuStyle }}>
      <ul>
        <li>menu</li>
      </ul>

      <div className="close-btn-wrap">
        <button onClick={props.onVisible}>close</button>
      </div>
    </div>
  );
};

export default MenuMo;
