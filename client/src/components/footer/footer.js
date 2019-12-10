import React from "react";
import "./style.scss";

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text"> Toronto Wanderer</h5>
                <p className="grey-text text-lighten-4">
                  © 2019 Toronto Wanderer. All rights reserved. No part of this
                  site may be reproduced without our written permission.
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Connect</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="/">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="/">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a className="grey-text text-lighten-3" href="/">
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
}

export default Footer;
