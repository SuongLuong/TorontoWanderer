import React from "react";

class Tab extends React.Component {
  render() {
    return (
      <>
        <ul id="tabs-swipe-demo" class="tabs">
          <li class="tab col s3">
            <a href="#test-swipe-1">RESTAURANTS</a>
          </li>
          <li class="tab col s3">
            <a class="active" href="#test-swipe-2">
              COFFEE SHOPS{" "}
            </a>
          </li>
          <li class="tab col s3">
            <a href="#test-swipe-3">SHOPPING MALL</a>
          </li>
        </ul>
        <div id="test-swipe-1" class="col s12 blue">
          Test 1
        </div>
        <div id="test-swipe-2" class="col s12 red">
          Test 2
        </div>
        <div id="test-swipe-3" class="col s12 green">
          Test 3
        </div>
      </>
    );
  }
}

export default Tab;
