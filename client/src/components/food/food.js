import React from "react";
import "./style.scss";
import food from "../../assets/img/food3.jpeg";
class Food extends React.Component {
  state = [
    {
      name: "restaurant1",
      type: "Italy"
    },
    {
      name: "restaurant2",
      type: "Asia"
    },
    {
      name: "restaurant3",
      type: "Mexico"
    }
  ];

  render() {
    return this.state.map(item => {
      const { name, type } = item;
      return (
        <>
          <div className="foodsection">
            <div className="foodimgsec">
              <img className="foodimg" src={food} alt="" />
            </div>
            <div className="foodlistsec">
              <h1>Food and Drink</h1>
              <div className="item1">
                <span>{name}</span>
                <p>{type}</p>
              </div>
              {/* <div className="item2">
              <span>{this.state.name}</span>
              <p>in East Toronto and Rosedale</p>
            </div>
            <div className="item3">
              <span>{this.state.name}</span>
              <p>in East Toronto and Rosedale</p>
            </div>
            <div className="item4">
              <span>{this.state.name}</span>
              <p>in East Toronto and Rosedale</p>
            </div> */}
            </div>
          </div>
        </>
      );
    });
  }
}

export default Food;
