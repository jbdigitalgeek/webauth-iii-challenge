import React, { Component } from "react";
import axios from "axios";

 class Register extends Component {
  state = {
    username: "",
    password: ""
  };

   render() {
    console.log("You are in the Signup page!");
    return (
      <form onSubmit={this.signup}>
        <h3>
          Welcome!
          <br />
          Please Sign up for an Account with us!
        </h3>
        <div>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChange}
          />
        </div>

         <div>
          <button type="submit">
            {" "}
            Signup
          </button>
        </div>
      </form>
    );
  }

   handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

   signup = e => {
    e.preventDefault();
   
    const endpoint = "http://localhost:4000/api/register";

     axios
      .post(endpoint, this.state)
      .then(res => {
        console.log(res.data);
        this.props.history.push("/login");
      })
      .catch(err => console.log(err));
  };
}

 export default Register;