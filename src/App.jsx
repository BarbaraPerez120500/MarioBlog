import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Posts from "./components/Posts";
import UserContext from "./context/User";
import Admin from "./components/Admin";
import Footer from "./components/Footer";
import cssluigi from "./styles/Luigis.css";
import textos from "./styles/Textos.css";
import Historia from "./styles/Historia.css";
import Form from "./components/Form";
import Mario from "./personajes/Mario";
import Luigi from "./personajes/Luigi";

const marioImagenes = [
  "../public/Mpeach2.jpeg",
  "../public/Peach.jpeg",
  "../public/Mario.jpeg",
  "../public/Mars.jpeg",
];

const App = function () {
  const { user } = useContext(UserContext);
  return (
    <>
      <Navbar />
      <Slider imagenes={marioImagenes} />
      <Luigi />
      <Mario />

      {!user || user.roll != "admin" ? <Posts /> : <Admin />}
      <Form />
      <Footer />
    </>
  );
};

export default App;
