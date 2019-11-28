import React from "react";
import Navigation from "./components/navigation/navigation";
import Slider from "./components/slider/slider";
import "materialize-css/dist/css/materialize.min.css";
import Search from "./components/search/search";
import Information from "./components/information/information";

function App() {
  return (
    <>
      <Navigation />
      <Slider />
      <Search />
      <Information />
    </>
  );
}

export default App;
