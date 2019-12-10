import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import ttc1 from "../../assets/img/vectore-img1.png";
import ttc2 from "../../assets/img/vectore-img2.png";
import ttc3 from "../../assets/img/vectore-img3.png";

import "./style.scss";

class Information extends React.Component {
  componentDidMount() {
    let collapse = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapse, {});

    const parallax = document.querySelectorAll(".parallax");
    M.Parallax.init(parallax, {});
  }

  render() {
    return (
      <>
        <div className="info-background">
          <h1 className="info__header">Welcome to Toronto</h1>
          <p className="info__info">
            Bright and bustling, Toronto is a cosmopolitan city whose residents
            have roots across the globe. Art, food, beaches, nightlife – in
            Toronto, you’ve got it all. It’s tempting to think Toronto, Canada’s
            economic powerhouse, is all work and no play. But the nation’s most
            populous city is also a top place to have fun. Vast green spaces,
            including a gorgeous waterfront, earn Toronto the moniker “city
            within a park.” The city’s energetic spirit also fuels hopping
            nightlife, sophisticated shopping, eclectic restaurants, and teams
            in virtually every professional sport. Don’t miss the thriving arts
            scene—including theater, concerts, galleries, and red-carpet film
            festivals. — Michele Peterson
          </p>
          <ul className="collapsible popout collapse">
            <li>
              <div className="collapsible-header">
                <i className="material-icons">ac_unit</i>Read More
              </div>
              <div className="collapsible-body">
                <h1 className="readmore__heading">Best Time To Visit</h1>
                <p className="readmore__subtitle">
                  Late spring, early summer and fall are the most pleasant
                  walking months in the city—and this is a walkable city.
                  September, one of the loveliest months of the year, is also
                  packed with the Toronto International Film Festival fêtes and
                  a spate of other weekend festivals.
                </p>
                <h1 className="readmore__heading">Toronto Transportation</h1>
                <div className="readmore__subtitle">
                  The Toronto Transportation Commission runs an underground
                  subway system, streetcars and buses to get you from uptown to
                  the waterfront prices start at $3.10. Licensed taxis and Uber
                  are also common. PRESTO is an electronic payment system that
                  makes paying for your trip simple, convenient and secure. A $6
                  non-refundable fee applies to new PRESTO cards. You need to
                  load a minimum of $10.00 and/or load a transit pass to start
                  with a tap.
                  <div>
                    <div className="ttc">
                      <img className="ttc__img" src={ttc1} alt=""></img>
                      <span className="ttc__caption">
                        PRESTO works in lots of places.
                      </span>
                      <img className="ttc__img" src={ttc2} alt=""></img>
                      <span className="ttc__caption">
                        Pay for transit on your terms.
                      </span>
                      <img className="ttc__img" src={ttc3} alt=""></img>
                      <span className="ttc__caption">
                        Travel with peace of mind.
                      </span>
                    </div>
                  </div>
                </div>
                <h1 className="readmore__heading">Food</h1>
                <p className="readmore__subtitle">
                  People gotta eat, and nowhere is Toronto’s remarkable
                  diversity more evident than in its food and restaurants.
                  Pakistani, Persian, Portuguese; aboriginal and new fusion;
                  Japanese pancakes and Korean barbecue; fresh pasta in Little
                  Italy, shawarmas in Greektown and the best damn dumplings in
                  Chinatown. Torontonians love to eat out, whether it's sitting
                  at sidewalk bistros on a warm summer night or getting all
                  bundled up for some hot Vietnamese pho. That's to say nothing
                  of Toronto’s great food on the go – there are peameal-bacon
                  sandwiches at St Lawrence Market and food trucks selling an
                  array of fragrant delights.
                </p>
                <h1 className="readmore__heading">Nightlife</h1>
                <p className="readmore__subtitle">
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
                <h1 className="readmore__heading">Urban Outdoors</h1>
                <p className="readmore__subtitle">
                  Like any place that's cold, Toronto adores its spring and
                  summer months. Torontonians aren’t necessarily outdoorsy as a
                  bunch, but the city makes it easy to enjoy those precious
                  sunny days. There are beaches and waterfront paths along Lake
                  Ontario, plus kayaking or standup paddling around the Toronto
                  Islands. Green spaces such as High Park and Kew Gardens, huge
                  and grassy, are perfect for a picnic and an afternoon stroll,
                  while the east end has a growing network of leafy bike paths
                  and walkways. Even in winter, on a gray, chilly day, there’s
                  outdoor ice skating to enjoy!
                </p>
              </div>
            </li>
          </ul>
        </div>
      </>
    );
  }
}

export default Information;
