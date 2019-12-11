import React from "react";
import "./style.scss";
import M from "materialize-css";

class Follow extends React.Component {
  componentDidMount() {
    const ss2 = document.querySelector(".scrollspy");
    M.ScrollSpy.init(ss2, {});
  }
  render() {
    return (
      <>
        <section
          id="contact"
          className="section sectionfollow section-follow darken-2 black-text center scrollspy"
        >
          <div className="container">
            <div className="row footercontainer">
              <div className="col s12">
                <a href="/">
                  <h4 className="brand-logo-footer">Toronto Wanderer</h4>
                </a>
                <p className="black-text text-lighten-4">
                  © 2019 All rights reserved. No part of this site may be
                  reproduced without written permission
                </p>
                <p>
                  Follow us on social media for more interesting information
                </p>
                <a href="#" className="blue-text">
                  <i className="fab fa-facebook fa-4x"></i>
                </a>
                <a href="#" className="blue-text">
                  <i className="fab fa-twitter fa-4x"></i>
                </a>
                <a href="#" className="blue-text">
                  <i className="fab fa-pinterest fa-4x"></i>
                </a>
                <a href="#" className="blue-text">
                  <i className="fab fa-instagram fa-4x"></i>
                </a>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Follow;
