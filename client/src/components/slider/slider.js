import React from "react";
import "../../../node_modules/materialize-css/dist/css/materialize.min.css";
import toronto1 from "../../assets/img/toronto1.jpg";
import toronto2 from "../../assets/img/toronto2.jpg";
import toronto3 from "../../assets/img/toronto3.jpg";
import toronto4 from "../../assets/img/toronto4.jpg";
import "./style.scss";
import M from "materialize-css";

class Slider extends React.Component {
  componentDidMount() {
    let elems = document.querySelectorAll(".slider");

    let options = {
      indicatior: true,
      height: 600,
      duration: 500,
      interval: 2500
    };
    M.Slider.init(elems, options);
  }

  render() {
    return (
      <section className="slider">
        <ul className="slides">
          <li>
            <img src={toronto1} alt="" />
            <div className="caption center-align">
              <h3>Hello, Toronto!</h3>
              <h5 className="light grey-text text-lighten-3">
                Adventures in the Snowy City
              </h5>
            </div>
          </li>
          <li>
            <img src={toronto2} alt="" />
            <div className="caption center-align">
              <h3>Hello, Toronto!</h3>
              <h5 className="light grey-text text-lighten-3">
                Adventures in the Snowy City
              </h5>
            </div>
          </li>
          <li>
            <img src={toronto3} alt="" />
            <div className="caption center-align">
              <h3>Hello, Toronto!</h3>
              <h5 className="light grey-text text-lighten-3">
                Adventures in the Snowy City
              </h5>
            </div>
          </li>
          <li>
            <img src={toronto4} alt="" />
            <div className="caption center-align">
              <h3>Hello, Toronto!</h3>
              <h5 className="light grey-text text-lighten-3">
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
