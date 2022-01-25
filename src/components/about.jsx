import React, { Component } from "react";
import PageHeader from "./common/pageHeader";
class About extends Component {
  state = {};
  render() {
    return (
      <div className="container">
        <PageHeader titleText="About Page Header Props" />
        <div className="row">
          <div className="col-12">
            <p>About my first app</p>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
