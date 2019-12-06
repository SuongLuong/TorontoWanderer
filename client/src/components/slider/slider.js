import React from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import toronto1 from "../../assets/img/toronto1.jpg";
import toronto2 from "../../assets/img/toronto2.jpg";
import toronto3 from "../../assets/img/toronto3.jpg";
import "./style.scss";
import M from "materialize-css";

class Slider extends React.Component {
  componentDidMount() {
    let slider = document.querySelectorAll(".slider");
    let options = {
      indicators: false,
      height: 700,
      duration: 600,
      interval: 5000
    };
    M.Slider.init(slider, options);
  }

  render() {
    return (
      <section className="slider">
        <ul className="slides">
          <li>
            <img src={toronto1} alt="" />
            <div className="caption center-align">
              <h2 className="heading">Toronto</h2>
              <h5 className="heading__subtitle light grey-text text-lighten-3">
                Canada's Downtown
              </h5>
            </div>
          </li>
          <li>
            <img src={toronto2} alt="" />
            <div className="caption center-align">
              <h2 className="heading">Hello, Friends!</h2>
              <h5 className="heading__subtitle light grey-text text-lighten-3">
                Ready To Discover
              </h5>
            </div>
          </li>
          <li>
            <img src={toronto3} alt="" />
            <div className="caption center-align">
              <h2 className="heading">Your Journey</h2>
              <h5 className="heading__subtitle ight grey-text text-lighten-3">
                Adventures in the Snowy City
              </h5>
            </div>
          </li>
        </ul>
      </section>
    );
  }
}

export default Slider;
