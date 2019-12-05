import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import "./style.scss";
import toronto2 from "../../assets/img/toronto2.jpg";
import toronto3 from "../../assets/img/toronto3.jpg";
import toronto4 from "../../assets/img/toronto4.jpg";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import parallax1 from "../../assets/img/parallax1.jpg";
import M from "materialize-css";
import axios from "axios";
import { Link } from "react-router-dom";

class Place extends React.Component {
  state = {
    place: []
  };

  componentDidMount() {
    let options = {
      responsiveThreshold: 0
    };
    const parallax = document.querySelectorAll(".parallax");
    M.Parallax.init(parallax, options);

    axios
      .get("http://localhost:8080/")
      .then(response => {
        this.setState({
          place: response.data
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const settings = {
      dots: true,
      slidesToScroll: 1,
      autoplay: false,
      infinite: false,
      centerPadding: "0px",
      slidesToShow: 3,
      // speed: 3000,
      autoplaySpeed: 0,
      cssEase: "linear"
    };

    return (
      <>
        {this.state.place.length === 0 ? null : (
          <section id="popular" className="section section-popular scrollspy">
            <h1>TOP experiences in Toronto</h1>
            <div className="row">
              <Slider {...settings} className="container">
                <Link
                  style={{ textDecoration: "none", margin: "0" }}
                  className="link"
                  to={`/${this.state.place[0].id}`}
                >
                  <div className="col cardslider s12 m4">
                    <div className="card">
                      <div className="card-image">
                        <img src={toronto2} alt=""></img>
                        <span className="card-title">
                          {this.state.place[0].name}
                        </span>
                      </div>
                      <div className="card-content">
                        {this.state.place[0].area}
                      </div>
                    </div>
                  </div>
                </Link>

                <Link className="link" to={`/${this.state.place[1].id}`}>
                  <div className="col cardslider s12 m4">
                    <div className="card">
                      <div className="card-image">
                        <img src={toronto3} alt=""></img>
                        <span className="card-title">
                          {this.state.place[1].name}
                        </span>
                      </div>
                      <div className="card-content">
                        {this.state.place[1].area}
                      </div>
                    </div>
                  </div>
                </Link>

                <Link className="link" to={`/${this.state.place[2].id}`}>
                  <div className="col cardslider s12 m4">
                    <div className="card">
                      <div className="card-image">
                        <img src={toronto4} alt=""></img>
                        <span className="card-title">
                          {this.state.place[2].name}
                        </span>
                      </div>
                      <div className="card-content">
                        {this.state.place[2].area}
                      </div>
                    </div>
                  </div>
                </Link>

                <Link className="link" to={`/${this.state.place[3].id}`}>
                  <div className="col cardslider s12 m4">
                    <div className="card">
                      <div className="card-image">
                        <img src={toronto4} alt=""></img>
                        <span className="card-title">
                          {this.state.place[3].name}
                        </span>
                      </div>
                      <div className="card-content">
                        {this.state.place[3].area}
                      </div>
                    </div>
                  </div>
                </Link>

                <Link className="link" to={`/${this.state.place[4].id}`}>
                  <div className="col cardslider s12 m4">
                    <div className="card">
                      <div className="card-image">
                        <img src={toronto4} alt=""></img>
                        <span className="card-title">
                          {this.state.place[4].name}
                        </span>
                      </div>
                      <div className="card-content">
                        {this.state.place[4].area}
                      </div>
                    </div>
                  </div>
                </Link>

                <Link className="link" to={`/${this.state.place[5].id}`}>
                  <div className="col cardslider s12 m4">
                    <div className="card">
                      <div className="card-image">
                        <img src={toronto4} alt=""></img>
                        <span className="card-title">
                          {this.state.place[5].name}
                        </span>
                      </div>
                      <div className="card-content">
                        {this.state.place[5].area}
                      </div>
                    </div>
                  </div>
                </Link>
              </Slider>
            </div>
          </section>
        )}
        <div className="parallax-container">
          {" "}
          <div className="parallax">
            <img src={parallax1} />
          </div>
        </div>
      </>
    );
  }
  // }
}

export default Place;
