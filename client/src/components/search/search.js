import React from "react";
import "./style.scss";
import M from "materialize-css";

class Search extends React.Component {
  componentDidMount() {
    const auto = document.querySelector(".autocomplete");
    M.Autocomplete.init(auto, {
      data: {
        Experiences: null,
        Foods: null,
        Drinks: null,
        Restaurants: null,
        Spots: null,
        Weather: null,
        "Public Transportation": null,
        Events: null,
        "Top Attractions": null
      }
    });
  }
  render() {
    return (
      <>
        <section
          id="search"
          className="section section-search blue darken-1 white-text center scrollspy"
        >
          <div className="container">
            <div className="row">
              <div className="col s12">
                <h3>Search Your Journey Here</h3>
                <div className="input-field">
                  <input
                    id="autocomplete-input"
                    placeholder="Search"
                    type="text"
                    className="white grey-text autocomplete"
                    onChange={this.props.handleInput}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default Search;
