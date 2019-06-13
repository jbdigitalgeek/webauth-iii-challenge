import React from 'react';
import axios from 'axios';



class UserList extends React.Component {
  state = {
    users: []
  };

  render() {
    return (
      <>

        <h2>Our Users</h2>

        <ul>
          {this.state.users.map(user => (
            <li key={user.id}>{user.username}</li>
          ))}
        </ul>
       
      </>
    );
  }

  componentDidMount() {
    const endpoint ='http://localhost:4000/api/users';

    axios
      .get(endpoint, {
        headers: { Authorization: localStorage.getItem('jwt') }
      })
      .then(res => {
        console.log('users', res.data);
        this.setState(() => ({ users: res.data.users }));
      })
      .catch(({ error }) => {
        console.error('users error', error);
      })
  }
}

export default UserList;