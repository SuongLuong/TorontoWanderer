import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./style.scss";

class Navigation extends React.Component {
  componentDidMount() {
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }

  s;

  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="black">
            <div className="container">
              <div className="nav-wrapper">
                <a href="/" className="brand-logo">
                  Toronto Wanderer
                </a>

                <ul className="right hide-on-med-and-down">
                  <li className="nav-list">
                    <a href="/">Home</a>
                  </li>
                  <li className="nav-list">
                    <a href="#place">Experiences</a>
                  </li>
                  <li className="nav-list">
                    <a href="#contact">Contact</a>
                  </li>
                  <li className="nav-list">
                    <a href="#gallery">Gallery</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </>
    );
  }
}

export default Navigation;
