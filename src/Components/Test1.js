import React, { Component } from 'react';

class Test1 extends Component {
  constructor() {
    super();
    this.state = {
    }
  }

  componentDidMount() {}

  render() {
    return (
      <div className="tc ba">
        <form>
          <p />
          <label>First Name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="First Name" />
          <p />
          <label>Last Name:</label>
          <input type="text" name="lastName" placeholder="Last Name" />
          <p />
          <label>Email:</label>
          <input type="text" name="email" placeholder="Email" />
          <p />
          <button name="btnAdd" className="fw7 grow br-pill bw2 ph3 pv2 mb2 navy">Add</button>
        </form>
      </div>
    );
  }
}

export default Test1;