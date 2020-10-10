import React, { Component } from "react";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import { Modal, Button } from "react-bootstrap";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isUserAuthenticated: false,
      isUserLoggingIn: true,
      isUserLoginCheck: false,
      isShowModalDialog: false,
      error: null,
      txtLogin: "",
      txtPassword: "",
      txtModalTitle: "",
      txtModalBody: "",
      txtModalButtonVariant: "outline-danger",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLoginCheck = this.handleLoginCheck.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleChange = (e) => {
    const id = e.target.id;
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    this.setState({
      [id]: value,
    });
  };

  handleLogin = (e) => {
    //alert(e.target.id);
    if (!this.state.isUserAuthenticated && e.target.id === "lnkLogin") {
      this.setState({
        isUserAuthenticated: false,
        isUserLoggingIn: true,
      });
    } else if (
      !this.state.isUserAuthenticated &&
      this.state.isUserLoggingIn &&
      e.target.id === "btnLogin"
    ) {
      if (this.state.txtLogin === '' || this.state.txtPassword === '') {
        this.setState({
          txtModalTitle: 'Input',
          txtModalBody: 'Invalid input, login name or password cannot be empty',
          isShowModalDialog: true
        })
      }
      else
        this.handleLoginCheck(this.state.txtLogin, this.state.txtPassword);
    } else if (this.state.isUserAuthenticated && e.target.id === "lnkLogin") {
      this.setState((prevState) => {
        return {
          isUserAuthenticated: false,
          isUserLoggingIn: true,
          isUserLoginCheck: false,
          txtLogin: "",
          txtPassword: "",
        };
      });
    }
  }

  handleLoginCheck = (txtLogin, txtPassword) => {
    let xUrl = "/cloudant_users/" + txtLogin + "/" + txtPassword;
    fetch(xUrl)
      .then((res) => res.json())
      .then((xUser) => {
        if (xUser.length >= 1)
          this.setState({
            isUserAuthenticated: true,
            isUserLoggingIn: false,
            isUserLoginCheck: false,
            isShowModalDialog: false,
            txtLogin: "",
            txtPassword: "",
          });
        else
          this.setState({
            isUserAuthenticated: false,
            isUserLoggingIn: true,
            isUserLoginCheck: false,
            txtLogin: txtLogin,
            txtPassword: txtPassword,
            isShowModalDialog: true,
            txtModalTitle: 'User',
            txtModalBody: 'Invalid credentials'
          });
      })
      .catch((error) =>
        this.setState({
          error,
          isUserAuthenticated: false,
          isUserLoggingIn: true,
          isUserLoginCheck: false,
          txtLogin: "",
          txtPassword: "",
        })
      );
  };

  handleCloseModal = (e) =>
    this.setState({ isShowModalDialog: false });

  render() {
    return (
      <div>
        <Header
          propHandleLogin={this.handleLogin}
          propIsUserAuthenticated={this.state.isUserAuthenticated}
        />
        <p />
        <Content
          propHandleLogin={this.handleLogin}
          propHandleChange={this.handleChange}
          propModalTitle={this.state.txtModalTitle}
          propModalBody={this.state.txtModalBody}
          propModalShow={this.state.isShowModalDialog}
          propHandleCloseModal={this.handleCloseModal}
          propModalButtonVariant={this.state.txtModalButtonVariant}
          propData={this.state}
        />
        <Footer />
      </div>
    );
  }
}