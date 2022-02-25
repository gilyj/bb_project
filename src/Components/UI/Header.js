import React, { Fragment, useEffect, useRef, useState } from "react";
import MenuMo from "./MenuMo";

import "./Header.css";

const Header = () => {
  const [active, setActive] = useState(false);
  const [visible, setVisible] = useState(false);

  function wheelHandler(e) {
    e.deltaY > 0 ? setActive(true) : setActive(false);
  }

  const clickVisibleHandler = (e) => {
    e.preventDefault();
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
  };

  useEffect(() => {
    window.addEventListener("wheel", wheelHandler);
    // return window.removeEventListener("wheel", wheelHandler);
  });

  return (
    <Fragment>
      <header id="header" className={active ? "active" : ""}>
        <div className="logo">
          <h1>LOGO</h1>
        </div>
        <div className="menu-btn-wrap">
          <a href="#" onClick={clickVisibleHandler}>
            MENU
          </a>
        </div>
      </header>
      {visible && <MenuMo onVisible={closeHandler} />}
    </Fragment>
  );
};

export default Header;
