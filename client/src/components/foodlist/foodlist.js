import React from "react";
import "./style.scss";
import Food from "../food/food";
import Search from "../search/search";

class FoodList extends React.Component {
  state = {
    restaurants: [
      {
        name: "Restaurant1",
        type: "Italy"
      },
      {
        name: "Restaurant2",
        type: "Asia"
      },
      {
        name: "Restaurant3",
        type: "Mexico"
      }
    ],
    search: ""
  };

  handleInput = e => {
    console.log(e.target.value);
    this.setState({
      search: e.target.value
    });
  };

  render() {
    const { search, restaurants } = this.state;
    const lowercasedSearch = search.toLowerCase();
    const filteredRestaurant = restaurants.filter(item => {
      return Object.keys(item).some(key =>
        item[key].toLowerCase().includes(lowercasedSearch)
      );
    });

    return (
      <>
        <h1>Food and Drink</h1>
        <Search handleInput={this.handleInput} />
        {filteredRestaurant.map(item => {
          const { name, type } = item;
          return <Food key={name} name={name} type={type} />;
        })}
      </>
    );
  }
}

export default FoodList;
