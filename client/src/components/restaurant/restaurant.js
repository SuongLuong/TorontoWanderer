import React from "react";
import "./style.scss";
import M from "materialize-css";
import { Link } from "react-router-dom";

class Restaurant extends React.Component {
  componentDidMount() {
    var elems = document.querySelectorAll(".modal");
    M.Modal.init(elems, {});
  }
  render() {
    return (
      <>
        <div className="foodlistsec">
          <Link to={`/restaurants/${this.props.id}`}>
            <div className="item zoom">
              <div className="waves-effect waves-light">
                <p>{this.props.name}</p>
                <p>{this.props.type}</p>
              </div>
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default Restaurant;
