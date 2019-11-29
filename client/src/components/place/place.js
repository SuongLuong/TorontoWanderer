import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./style.scss";
import toronto5 from "../../assets/img/toronto5.jpg";
import toronto2 from "../../assets/img/toronto2.jpg";
import toronto3 from "../../assets/img/toronto3.jpg";
import toronto4 from "../../assets/img/toronto4.jpg";
import Slider from "react-slick";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";

class Place extends React.Component {
  render() {
    const settings = {
      dot: false,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 3,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    return (
      <>
        <section id="popular" className="section section-popular scrollspy">
          <h1>TOP experiences in Toronto</h1>
          <div className="row">
            <Slider {...settings} className="container">
              <div className="col cardslider s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src={toronto2} alt=""></img>
                    <span className="card-title">Cn Tower</span>
                  </div>
                  <div className="card-content">Toronto's iconic CN Tower</div>
                </div>
              </div>
              <div className="col cardslider s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src={toronto3} alt=""></img>
                    <span className="card-title">Cn Tower</span>
                  </div>
                  <div className="card-content">Toronto's iconic CN Tower</div>
                </div>
              </div>
              <div className="col cardslider s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src={toronto4} alt=""></img>
                    <span className="card-title">Cn Tower</span>
                  </div>
                  <div className="card-content">Toronto's iconic CN Tower</div>
                </div>
              </div>
              <div className="col cardslider s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src={toronto4} alt=""></img>
                    <span className="card-title">Cn Tower</span>
                  </div>
                  <div className="card-content">Toronto's iconic CN Tower</div>
                </div>
              </div>
              <div className="col cardslider s12 m4">
                <div className="card">
                  <div className="card-image">
                    <img src={toronto4} alt=""></img>
                    <span className="card-title">Cn Tower</span>
                  </div>
                  <div className="card-content">Toronto's iconic CN Tower</div>
                </div>
              </div>
            </Slider>
          </div>
        </section>
      </>
    );
  }
}

export default Place;
