import React from "react";

class Food extends React.Component {
  render() {
    return (
      <>
        <div className="foodsection">
          <div className="foodlistsec">
            <div className="item1">
              <span>{this.props.name}</span>
              <p>{this.props.type}</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Food;
