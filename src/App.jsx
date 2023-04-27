import React, { useContext } from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Posts from "./components/Posts";
import UserContext from "./context/User";
import Admin from "./components/Admin";



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
      {!user || user.roll != "admin" ? <Posts /> : <Admin />}
    </>
  );
};

export default App;
