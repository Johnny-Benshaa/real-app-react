import React, { Component } from "react";
import PageHeader from "./common/pageHeader";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="Welcome to Real App" />
        <div className="row">
          <div className="co-12">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              corporis.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
