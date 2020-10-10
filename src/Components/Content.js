import React, { Component } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";
import ModalDialog from "./ModalDialog";

export default class Content extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() { }

  render() {
    return (
      <div className="justify-content-center">
        {this.props.propData.isUserAuthenticated ? (
          <Dashboard />
        ) : this.props.propData.isUserLoggingIn ? (
          <>
            <Login {...this.props} />
            <ModalDialog {...this.props} />
          </>
        ) : (
              ""
            )}
      </div>
    );
  }
}