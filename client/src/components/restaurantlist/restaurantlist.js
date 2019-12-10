import React from "react";
import "./style.scss";
import Restaurant from "../restaurant/restaurant";
import Search from "../search/search";
import axios from "axios";
import Flip from "react-reveal/Flip";

class RestaurantList extends React.Component {
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
        <h2 className="rest-title">Local Favourite Restaurants</h2>
        <Search handleInput={this.handleInput} />
        <div className="fooditem">
          {filteredRestaurant.map(item => {
            const {
              id,
              name,
              type,
              image,
              description,
              hours,
              location
            } = item;
            return (
              <Flip key={id} left>
                <Restaurant
                  key={name}
                  name={name}
                  type={type}
                  image={image}
                  location={location}
                  hours={hours}
                  description={description}
                  id={id}
                />
              </Flip>
            );
          })}
        </div>
      </>
    );
  }
}

export default RestaurantList;
