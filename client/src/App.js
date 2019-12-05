import React from "react";
import Navigation from "./components/navigation/navigation";
import Slider from "./components/slider/slider";
import "materialize-css/dist/css/materialize.min.css";
import Information from "./components/information/information";
import Place from "./components/place/place";
import FoodList from "./components/foodlist/foodlist";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlaceDetail from "./components/placedetail/placedetail";

function App() {
  return (
    <>
      <Navigation />
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            exact
            render={props => (
              <>
                <Slider />
                <Information />
                <Place />
                <FoodList />
              </>
            )}
          />
          <Route path="/:id" component={PlaceDetail} />
        </Switch>
      </BrowserRouter>

      {/* <Slider />
      <Information />
      <Place />
      <FoodList /> */}
    </>
  );
}

export default App;
