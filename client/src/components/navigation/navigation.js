import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";

class Navigation extends React.Component {
  componentDidMount() {
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }

  render() {
    return (
      <>
        <div className="navbar-fixed">
          <nav className="blue">
            <div className="container">
              <div className="nav-wrapper">
                <a href="#home" className="brand-logo">
                  Toronto Wanderer
                </a>
                <a
                  href=""
                  className="sidenav-trigger"
                  data-target="mobileview-nav"
                >
                  <icon className="material-icons">menu</icon>
                </a>
                <ul className="right hide-on-med-and-down">
                  <li>
                    <a href="home">Home</a>
                  </li>
                  <li>
                    <a href="search">Search</a>
                  </li>
                  <li>
                    <a href="experience">Experiences</a>
                  </li>
                  <li>
                    <a href="discovery">Discovery</a>
                  </li>
                  <li>
                    <a href="gallery">Gallery</a>
                  </li>
                  <li>
                    <a href="contact">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <ul className="sidenav" id="mobileview-nav">
          <li>
            <a href="home">Home</a>
          </li>
          <li>
            <a href="search">Search</a>
          </li>
          <li>
            <a href="experience">Experiences</a>
          </li>
          <li>
            <a href="discovery">Discovery</a>
          </li>
          <li>
            <a href="gallery">Gallery</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </>
    );
  }
}

export default Navigation;
