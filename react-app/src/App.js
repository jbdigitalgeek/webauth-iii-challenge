import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import './App.css';
import Login from './login/Login'

function App() {
  return (
    <>
      <header>
        <NavLink to="/login">Login</NavLink>
      </header>
        <main>
          <Route path="/login" component={Login}></Route>
   </main>
      
    </>
  );
}

export default App;
