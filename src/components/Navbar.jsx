import React, { useContext } from "react";

import NavbarStyle from "../styles/Navbar.module.css";
import User from "./User";
const Navbar = function () {
  return (
    <nav className={NavbarStyle.menu}>
      <a href="#personajes">Personajes</a>
      <a href="#Historia">Historia</a>
      <a href="#Noticias">Noticias</a>
      <a href="#Pelicula">Pelicula</a>
      <User />
    </nav>
  );
};

export default Navbar;
