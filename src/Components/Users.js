import React, { Component } from 'react';

class Users extends Component {
  constructor() {
    super();
    this.state = {
      xUsers: []
    }
  }

  componentDidMount() {
    //fetch('/sqlite_users')
    fetch('/cloudant_users')
      .then(res => res.json())
      //.then(users => this.setState({ users: users }));
      .then(xUsers => this.setState({ xUsers: xUsers }, () => console.log('Users Fetched...', xUsers)));
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <ul>
          {/*object properties are case sensitive, id1 and ID1 are different*/}
          {this.state.xUsers.map(xUser =>
            //<li key={xUser.ID1}>{xUser.Name1}</li>
            <li key={xUser.id1}>{xUser.name1}</li>
          )}
        </ul>
      </div>
    );
  }
}

export default Users;