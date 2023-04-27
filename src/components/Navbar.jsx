import React, { useContext } from "react";

import NavbarStyle from "../styles/Navbar.module.css";
import User from "./User";
const Navbar = function () {
  return (
    <nav className={NavbarStyle.menu}>
      <ul>
        <li>
          <a href="#">
            <button>Personajes</button>
          </a>
        </li>
        <li>
          <a href="#">
            <button>Historia</button>
          </a>
        </li>
        <li>
          <a href="#">
            <button>Noticias</button>
          </a>
        </li>
      </ul>
      <User />
    </nav>
  );
};

export default Navbar;
