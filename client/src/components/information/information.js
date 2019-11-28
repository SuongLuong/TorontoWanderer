import React from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import "./style.scss";

class Information extends React.Component {
  componentDidMount() {
    let collapse = document.querySelectorAll(".collapsible");
    M.Collapsible.init(collapse, {});
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
        <ul className="collapsible">
          <li>
            <div className="collapsible-header">
              <i className="material-icons">ac_unit</i>Read More
            </div>
            <div className="collapsible-body">
              <h1>Arts and Culture</h1>
              <p>
                Where to begin? Toronto is itself a cultural phenomenon, with
                residents from around the world and scores of languages, foods,
                customs and celebrations – they’re what make the city great. As
                Canada’s largest city, Toronto has outstanding museums and
                galleries, from the Frank Gehry–redesigned Art Gallery of
                Ontario to the delightful Bata Shoe Museum (yes, shoes). The
                same goes for theatres; the gorgeous Elgin and Winter Garden
                Theatre has backstage tours as well as regular shows, and
                Shakespeare in High Park channels the Bard every summer. There’s
                live music, poetry readings, comedy shows, LGBTIQ+ spots and
                more, too.
              </p>
              <h1>Food</h1>
              <p>
                People gotta eat, and nowhere is Toronto’s remarkable diversity
                more evident than in its food and restaurants. Pakistani,
                Persian, Portuguese; aboriginal and new fusion; Japanese
                pancakes and Korean barbecue; fresh pasta in Little Italy,
                shawarmas in Greektown and the best damn dumplings in Chinatown.
                Torontonians love to eat out, whether it's sitting at sidewalk
                bistros on a warm summer night or getting all bundled up for
                some hot Vietnamese pho. That's to say nothing of Toronto’s
                great food on the go – there are peameal-bacon sandwiches at St
                Lawrence Market and food trucks selling an array of fragrant
                delights.
              </p>
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
      </>
    );
  }
}

export default Information;
