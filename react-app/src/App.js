import React from "react";
import { NavLink, Route, withRouter } from "react-router-dom";
import Register from "./axiosAuth/register";
import "./App.css";
import Login from "./axiosAuth/Login";
import UserList from "./users/UserList";

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <NavLink to="/users">Users</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
            <button onClick={this.logout}>Logout</button>
          </nav>
        </header>
        <main>
          <Route path="/register" component={Register} />
          <Route path="/users" component={UserList} />
          <Route path="/login" component={Login} />
        </main>
      </>
    );
  }

  logout = () => {
    localStorage.removeItem("jwt");

    this.props.history.push("/login");
  };
}

export default withRouter(App);
