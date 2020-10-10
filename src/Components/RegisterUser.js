import React, { Component } from 'react';

class RegisterUser extends Component {
  constructor() {
    super();
    this.state = {
      user: {}
    }
  }

  render() {
    return (
      <div align="center">
        <table class="table1" cellSpacing="5" cellpadding="5">
          <tr class="hidden1">
            <td><label for="id1">ID:</label></td>
            <td><span name="id1" id="id1">{this.state.user.id}</span></td>
          </tr>
          <tr>
            <td><label for="name1">Name:</label></td>
            <td><input type="text" name="name1" id="name1"></input></td>
          </tr>
          <tr>
            <td><label for="loginName1">Login Name:</label></td>
            <td><input type="text" name="loginName1" id="loginName1"></input></td>
          </tr>
          <tr>
            <td><label for="email">Email:</label></td>
            <td><input type="text" name="email" id="email"></input></td>
          </tr>
          <tr>
            <td><label for="contactNo">Contact No:</label></td>
            <td><input type="text" name="contactNo" id="contactNo"></input></td>
          </tr>
          <tr>
            <td><label for="workPlace">Work Place</label></td>
            <td><input type="text" name="workPlace" id="workPlace"></input></td>
          </tr>
          <tr>
            <td><label for="dob">Date of Birth:</label></td>
            <td><input type="text" name="dob" id="dob"></input></td>
          </tr>
          <tr>
            <td><label for="gender">Gender:</label></td>
            <td>
              <label for="male">Male</label>
              <input type="radio" name="gender" id="male" value="M"></input>
              &nbsp;&nbsp;<label for="female">Female</label>
              <input type="radio" name="gender" id="female" value="F"></input>
              &nbsp;&nbsp;<label for="other">Other</label>
              <input type="radio" name="gender" id="other" value="O"></input>
            </td>
          </tr>
          <tr>
            <td><label for="linkedinProfile">LinkedIn<br/>Profile:</label></td>
            <td><input type="text" name="linkedinProfile" id="linkedinProfile"></input></td>
          </tr>
          <tr>
            <td><label for="isPublic">Allow Public <br/>Visibility of <br/>Profile:</label></td>
            <td><input type="checkbox" name="isPublic" id="isPublic"></input></td>
          </tr>
        </table>
        <input type="submit" id="submit" name="submit"></input>
      </div>
    );
  }
}

export default RegisterUser;