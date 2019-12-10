import React from "react";
import Slider from "react-slick";
import g1 from "../../assets/img/g1.jpg";
import g2 from "../../assets/img/g2.jpg";
import g3 from "../../assets/img/g3.jpg";
import g4 from "../../assets/img/g4.jpg";
import g5 from "../../assets/img/g5.jpg";
import g6 from "../../assets/img/g6.jpg";
import g7 from "../../assets/img/g7.jpg";
import g8 from "../../assets/img/g8.jpg";
import g9 from "../../assets/img/g9.jpg";
import g10 from "../../assets/img/g10.jpg";
import g11 from "../../assets/img/g11.jpg";
import g12 from "../../assets/img/g12.jpg";

import "./style.scss";

class Gallery extends React.Component {
  render() {
    var settings = {
      dots: false,
      slidesToScroll: 1,
      autoplay: true,
      infinite: true,
      centerPadding: "0px",
      slidesToShow: 5,
      speed: 8000,
      autoplaySpeed: 0,
      cssEase: "linear"
    };
    return (
      <>
        <h1 className="gallery__title">Community</h1>
        <Slider className="gallery" {...settings}>
          <div className="gallery__section">
            <img className="g1 hvr-float gallery__img" src={g1} alt="" />
            <img className="g2 hvr-float gallery__img" src={g2} alt="" />
          </div>
          <div className="gallery__section">
            <img className="g3 hvr-float gallery__img" src={g3} alt="" />
            <img className="g4 hvr-float gallery__img" src={g4} alt="" />
          </div>
          <div className="gallery__section">
            <img className="g5 hvr-float gallery__img" src={g5} alt="" />
            <img className="g6 hvr-float gallery__img" src={g6} alt="" />
          </div>
          <div className="gallery__section">
            <img className="g7 hvr-float gallery__img" src={g7} alt="" />
            <img className="g8 hvr-float gallery__img" src={g8} alt="" />
          </div>
          <div className="gallery__section">
            <img className="g9 hvr-float gallery__img" src={g9} alt="" />
            <img className="g10 hvr-float gallery__img" src={g10} alt="" />
          </div>
          <div className="gallery__section">
            <img className="g11 hvr-float gallery__img" src={g11} alt="" />
            <img className="g12 hvr-float gallery__img" src={g12} alt="" />
          </div>
        </Slider>
      </>
    );
  }
}
export default Gallery;
