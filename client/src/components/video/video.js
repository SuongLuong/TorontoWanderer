import React from "react";
import video from "../../assets/img/video.mp4";
import "./style.scss";

class Video extends React.Component {
  render() {
    return (
      <>
        <video controls muted loop id="myVideo">
          <source src={video} type="video/mp4" />
        </video>
        <div className="content">
          <p>SEE</p>
        </div>
      </>
    );
  }
}

export default Video;
