import React from "react";
import "./style.scss";
import food from "../../assets/img/food3.jpeg";
class Food extends React.Component {
  render() {
    return (
      <>
        <div className="foodsection">
          <div className="foodimgsec">
            <img className="foodimg" src={food} alt="" />
          </div>
          <div className="foodlistsec">
            <h1>Food and Drink</h1>
            <div className="item1">
              <span>House of Gourmet</span>
              <p>in East Toronto and Rosedale</p>
            </div>
            <div className="item2">
              <span>House of Gourmet</span>
              <p>in East Toronto and Rosedale</p>
            </div>
            <div className="item3">
              <span>House of Gourmet</span>
              <p>in East Toronto and Rosedale</p>
            </div>
            <div className="item4">
              <span>House of Gourmet</span>
              <p>in East Toronto and Rosedale</p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Food;
