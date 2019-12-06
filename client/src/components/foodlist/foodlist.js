import React from "react";
import "./style.scss";
import Food from "../food/food";
import Search from "../search/search";
import axios from "axios";

class FoodList extends React.Component {
  state = {
    restaurants: [],
    search: ""
  };

  componentDidMount() {
    axios
      .get("http://localhost:8080/restaurants")
      .then(response => {
        this.setState({
          restaurants: response.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

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
