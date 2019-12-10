import React from "react";
import axios from "axios";
import "./style.scss";
import { SERVER_ADDR } from "../../config";

class RestaurantDetail extends React.Component {
  state = {
    restaurantDetail: []
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`${SERVER_ADDR}/restaurants/${id}`)
      .then(response => {
        this.setState({
          restaurantDetail: response.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    console.log(this.state.restaurantDetail);
    return (
      <div className="restaurant-detail">
        <>
          {this.state.restaurantDetail.id ? (
            <div className="restaurantDetails">
              <div className="restaurantDetails__left">
                <h1>{this.state.restaurantDetail.name}</h1>
                <p className="restaurantDetails__type">
                  {this.state.restaurantDetail.type}
                </p>
                <img
                  className="restaurantDetails__img"
                  src={this.state.restaurantDetail.image}
                  alt=""
                />
              </div>
              <div className="restaurantDetails__right">
                <p className="restaurantDetails__description">
                  {this.state.restaurantDetail.description}
                </p>
                <div>
                  <h5 className="restaurantDetails__detail">Details</h5>
                  <div>
                    <p className="restaurantDetails__detaillist">
                      Address: {this.state.restaurantDetail.location}
                    </p>
                    <p className="restaurantDetails__detaillist">
                      Hours: {this.state.restaurantDetail.hours}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : null}
        </>
      </div>
    );
  }
}

export default RestaurantDetail;
