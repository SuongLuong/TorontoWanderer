import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./style.scss";
import ttc1 from "../../assets/img/vectore-img1.png";
import ttc2 from "../../assets/img/vectore-img2.png";
import ttc3 from "../../assets/img/vectore-img3.png";
import parallax2 from "../../assets/img/parallax2.jpg";

class Information extends React.Component {
  componentDidMount() {
    let options = {
      responsiveThreshold: 0
    };
    let collapse = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapse, {});

    const parallax = document.querySelectorAll(".parallax");
    var instances = M.Parallax.init(parallax, options);
  }
  render() {
    return (
      <>
        <h1>Welcome to Toronto</h1>
        <p>
          Bright and bustling, Toronto is a cosmopolitan city whose residents
          have roots across the globe. Art, food, beaches, nightlife – in
          Toronto, you’ve got it all.
        </p>
        <ul className="collapsible popout collapse">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">ac_unit</i>Read More
            </div>
            <div className="collapsible-body">
              <h1>Best Time To Visit</h1>
              <p>
                Late spring, early summer and fall are the most pleasant walking
                months in the city—and this is a walkable city. September, one
                of the loveliest months of the year, is also packed with the
                Toronto International Film Festival fêtes and a spate of other
                weekend festivals.
              </p>
              <h1>Toronto Transportation</h1>
              <div>
                The Toronto Transportation Commission runs an underground subway
                system, streetcars and buses to get you from uptown to the
                waterfront prices start at $3.10. Licensed taxis and Uber are
                also common. PRESTO is an electronic payment system that makes
                paying for your trip simple, convenient and secure. A $6
                non-refundable fee applies to new PRESTO cards. You need to load
                a minimum of $10.00 and/or load a transit pass to start with a
                tap.
                <div>
                  <div>
                    <img className="ttc-img" src={ttc1} alt=""></img>
                    <span>PRESTO works in lots of places.</span>
                    <img className="ttc-img" src={ttc2} alt=""></img>
                    <span>Pay for transit on your terms.</span>
                    <img className="ttc-img" src={ttc3} alt=""></img>
                    <span>Travel with peace of mind.</span>
                  </div>
                </div>
              </div>
              <h1>Nightlife</h1>
              <p>
                No matter what your taste in drinks and nightlife, Toronto has
                you covered. It's no surprise that this humming metropolis has
                sleek martini bars and high-end cocktail lounges – some of the
                best are on rooftops. But it’s also an old city, with ancient
                pubs and gritty dive bars – just the sort of place adventurous
                travelers love. And of course there are craft breweries where
                bearded bartenders serve handcrafted suds in curated flights.
                Add to all this nightclubs, drag shows, poetry slams, comedy
                clubs and more, and it’s easy to have a great night out in
                Toronto.
              </p>
            </div>
          </li>
        </ul>
        <div className="parallax-container">
          {" "}
          <div className="parallax">
            <img src={parallax2} />
          </div>
        </div>
      </>
    );
  }
}

export default Information;
