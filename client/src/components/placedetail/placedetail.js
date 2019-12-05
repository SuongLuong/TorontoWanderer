import React from "react";
import axios from "axios";

class PlaceDetail extends React.Component {
  state = {
    placeDetail: []
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    axios
      .get(`http://localhost:8080/${id}`)
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
            <div>
              <h1>{this.state.placeDetail.name}</h1>
              <p>{this.state.placeDetail.area}</p>
              <img src={this.state.placeDetail.image} alt="" />
              <p>{this.state.placeDetail.description}</p>
              <a href={this.state.placeDetail.link}>
                <button>Buy Ticket</button>
              </a>
              <div>
                <ul>
                  <li>{this.state.placeDetail.street}</li>
                  <li>{this.state.placeDetail.phone}</li>
                  <li>{this.state.placeDetail.hours}</li>
                  <li>{this.state.placeDetail.website}</li>
                </ul>
              </div>
            </div>
          ) : null}
        </>
      </div>
    );
  }
}

export default PlaceDetail;
