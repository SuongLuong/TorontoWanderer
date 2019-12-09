import React from "react";
import Navigation from "./components/navigation/navigation";
import Slider from "./components/slider/slider";
import "materialize-css/dist/css/materialize.min.css";
import Information from "./components/information/information";
import Place from "./components/place/place";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import PlaceDetail from "./components/placedetail/placedetail";
import RestaurantDetail from "./components/restaurantdetail/restaurantdetail";
import Video from "./components/video/video";
import RestaurantList from "./components/restaurantlist/restaurantlist";
import SearchTest from "./components/searchtest/searchtest";

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
                <Information id="section1" />
                <Video id="section2" />
                <Place id="section3" />
                <RestaurantList id="section4" />
              </>
            )}
          />
          <Route exact path="/:id" component={PlaceDetail} />
          <Route exact path="/restaurants/:id" component={RestaurantDetail} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
