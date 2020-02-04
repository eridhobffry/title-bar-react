import React from "react";
import { Nav } from "../style/header_style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  const burgerToggle = () => {
    let linksEl = document.querySelector(".navNarrowLinks");
    if (linksEl.style.display === "block") {
      linksEl.style.display = "none";
    } else {
      linksEl.style.display = "block";
    }
  };

  return (
    <Nav>
      <div className="navWide">
        <div className="wideDiv">
          <a href="#">Link 1</a>
          <a href="#">Link 2</a>
          <a href="#">Link 3</a>
        </div>
      </div>
      <div className="navNarrow">
        <FontAwesomeIcon id="icon-bar" icon={faBars} onClick={burgerToggle} />
        {/* <i className="fa fa-bars fa-2x" onClick={burgerToggle}></i> */}
        <div className="navNarrowLinks">
          <a href="#" onClick={burgerToggle}>
            Link 1
          </a>
          <a href="#" onClick={burgerToggle}>
            Link 2
          </a>
          <a href="#" onClick={burgerToggle}>
            Link 3
          </a>
        </div>
      </div>
    </Nav>
  );
};
