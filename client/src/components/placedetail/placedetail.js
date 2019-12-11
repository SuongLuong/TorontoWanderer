import React from "react";
import axios from "axios";
import "./style.scss";
import { SERVER_ADDR } from "../../config";

class PlaceDetail extends React.Component {
  state = {
    placeDetail: []
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`${SERVER_ADDR}/places/${id}`)
      .then(response => {
        this.setState({
          placeDetail: response.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }
  render() {
    return (
      <div className="place-container">
        <>
          {" "}
          {this.state.placeDetail.id ? (
            <div className="placedetails">
              <div className="placedetails__left">
                <h1 className="placedetails__name">
                  {this.state.placeDetail.name}
                </h1>
                <p className="placedetails__area">
                  {this.state.placeDetail.area}
                </p>
                <img
                  className="placedetails__img"
                  src={this.state.placeDetail.image}
                  alt=""
                />
              </div>
              <div className="placedetails__right">
                <p className="placedetails__description">
                  {this.state.placeDetail.description}
                </p>
                <div>
                  <h4 className="placedetails__ticket">Tickets and tours</h4>
                  <a href={this.state.placeDetail.link} target="_blank">
                    <button className="placedetails__bstn">Buy Ticket</button>
                  </a>
                </div>
                <div>
                  <h5 className="placedetails__detail">Details</h5>
                  <div>
                    <p className="placedetails__detaillist">
                      Address: {this.state.placeDetail.street}
                    </p>
                    <p className="placedetails__detaillist">
                      Phone: {this.state.placeDetail.phone}
                    </p>
                    <p className="placedetails__detaillist">
                      Hours: {this.state.placeDetail.hours}
                    </p>
                  </div>
                  <a href={this.state.placeDetail.website} target="_blank">
                    <p>Check their Website</p>
                  </a>
                </div>
              </div>
            </div>
          ) : null}
        </>
      </div>
    );
  }
}

export default PlaceDetail;
