import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./style.scss";
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends React.Component {
  componentDidMount() {
    const sideNav = document.querySelector(".sidenav");
    M.Sidenav.init(sideNav, {});
  }

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
                    <Link
                      activeClass="active"
                      to="section3"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Experiences
                    </Link>
                  </li>
                  <li className="nav-list">
                    <Link
                      activeClass="active"
                      to="section4"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      Search
                    </Link>
                  </li>
                  <li className="nav-list">
                    <a href="gallery">Gallery</a>
                  </li>
                  <li className="nav-list">
                    <a href="contact">Contact</a>
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
