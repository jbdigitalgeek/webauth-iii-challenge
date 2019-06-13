import React from 'react';


class Login extends React.Component {
    render() {
       return <>
         <h3>Login Component</h3>
          <form action="">
              <div><label htmlFor="username"></label><input type="text"/></div>
              <div><label htmlFor="password"></label><input type="text"/></div>
              <div><button></button></div>
          </form>
        </>;
        }
    }
export default Login;