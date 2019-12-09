import React from "react";
import axios from "axios";
import "./style.scss";

class PlaceDetail extends React.Component {
  state = {
    placeDetail: []
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:8080/places/${id}`)
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
                <img
                  className="placedetails__img"
                  src={this.state.placeDetail.map}
                  alt=""
                />
              </div>
              <div className="placedetails__right">
                <p className="placedetails__descript">
                  {this.state.placeDetail.description}
                </p>
                <div>
                  <h4>Tickets and tours</h4>
                  <a href={this.state.placeDetail.link}>
                    <button>Buy Ticket</button>
                  </a>
                </div>
                <div>
                  <h5>Details</h5>
                  <div>
                    <p>Address: {this.state.placeDetail.street}</p>
                    <p>Phone: {this.state.placeDetail.phone}</p>
                    <p>Hours: {this.state.placeDetail.hours}</p>
                  </div>
                  <a href={this.state.placeDetail.website}>
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
