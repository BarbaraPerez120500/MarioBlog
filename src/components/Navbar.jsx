import React, { useContext } from "react";

import NavbarStyle from "../styles/Navbar.module.css";
import User from "./User";
const Navbar = function () {
  return (
    <nav className={NavbarStyle.menu}>
      <a href="#">Personajes</a>
      <a href="#">Historia</a>
      <a href="#">Noticias</a>
      <a href="#">Pelicula</a>
      <User />
    </nav>
  );
};

export default Navbar;
