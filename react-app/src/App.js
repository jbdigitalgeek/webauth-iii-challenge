import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './login/Login';
import UserList from './users/UserList';

class App extends React.Component {
  render() {
    return (
      <>
        <header>
          <NavLink to="/login">Login</NavLink>
          <NavLink to="/users">Users</NavLink>
          <button onClick={this.logout}>Logout</button>
        </header>
        <main>
        <Route path="/users" component={UserList}></Route>
          <Route path="/login" component={Login}></Route>
        </main>
      
      </>
    );
  }
};

export default App;
