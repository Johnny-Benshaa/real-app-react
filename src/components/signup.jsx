import React from "react";
import PageHeader from "./common/pageHeader";
import Joi from "joi-browser";
import Form from "./common/form";
import http from "../services/httpService";
import { apiUrl } from "../config.json";

//import { Navigate } from "react-router-dom";

class Signup extends Form {
  state = {
    data: { email: "", password: "", name: "" },
    errors: {},
  };

  schema = {
    email: Joi.string().required().email().label("Email"),
    password: Joi.string().required().min(6).label("Password"),
    name: Joi.string().required().min(2).label("Name"),
  };

  doSubmit = async () => {
    const data = { ...this.state.data };
    data.biz = false;

    try {
      await http.post(`${apiUrl}/users`, data);

      //<Navigate to="/home" replace={true} />;
      //Navigate({ replace: "/" });
      //this.props.navigate("/");
      this.props.history.replace("/");
    } catch (ex) {
      console.log("await log is up and running");
      if (ex.response && ex.response.status === 400) {
        this.setState({ errors: { email: "Email is taken" } });
        console.log("it works till here");
      }
    }
  };

  render() {
    return (
      <div className="container">
        <PageHeader titleText="Signup for Real App" />
        <div className="row">
          <div className="col-12">
            <p>You can open new account for free!</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <form onSubmit={this.handleSubmit} autoComplete="off" method="POST">
              {this.renderInput("email", "Email", "email")}
              {this.renderInput("password", "Password", "password")}
              {this.renderInput("name", "Name")}
              {this.renderButton("Signup")}
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Signup;
