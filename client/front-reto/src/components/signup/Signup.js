import React, { Component } from "react";
import '../signup/signup.css'
const API_BASE_URL = "https://cr2ge.sse.codesandbox.io";//aquí url de nuestra bbdd


/**
 * Feedback:
 * this.state.checkbox is bad naming for state variable
 * Form label font size should be 16px.
 * DO not leave unnecessary console logs in submission.
 *
 * Seems like some part was copied from Instructor's sandbox
 */

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "",
      email: "",
      password: "",
      isNotificationSubscribed: 1
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleFullNameChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ fullName: value });
  };

  handleEmailChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ email: value });
  };

  handlePasswordChange(e) {
    const { target: { value } = {} } = e;
    this.setState({ password: value });
  }
  handleCheckboxChange = (e) => {
    const { target: { value } = {} } = e;
    this.setState({ checkbox: value });
  };

  handleChange = (e) => {
    const {
      target: { name, value }
    } = e;
    console.log({ name, value });
    this.setState({ [name]: value });
  };
  handleFormSubmit = (e) => {
    e.preventDefault();
    const { fullName, email, password, checkbox } = this.state;
    console.log({ fullName, email, password, checkbox });
    const reqBody = JSON.stringify({ fullName, email, password, checkbox });
    console.log(reqBody);
    fetch(`${API_BASE_URL}/signup`, {//fetch a nuestra bbdd
      method: "post",
      body: reqBody,
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.text())
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  render() {
    const { fullName, email, password, checkbox } = this.state;
    return (
        <div className="right">
          <h2>Crea tu cuenta</h2>
          <form id="form" className="validate" onSubmit={this.handleFormSubmit}>
            <label htmlFor="email">Email:</label>
            <br />
            <input
              type="email"
              name="email"
              placeholder="Introduce tu email"
              className="widthsetting"
              required
              value={email}
              // onChange={this.handleFullNameChange}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="fullName">Nombre:</label>
            <br />
            <input
              type="text"
              name="fullName"
              placeholder="Introduce tu nombre"
              className="widthsetting"
              required
              value={fullName}
              // onChange={this.handleFullNameChange}
              onChange={this.handleChange}
            />
            <br />
            <label htmlFor="password">Password:</label>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Introduce tu password"
              className="widthsetting"
              required
              value={password}
              // onChange={this.handleFullNameChange}
              onChange={this.handleChange}
            />
            <br />
            <input
              type="checkbox"
              className="check"
              name="checkbox"
              value={checkbox}
              // onChange={this.handleFullNameChange}
              onChange={this.handleChange}
            />
            <label htmlFor="checkbox">
              Quiero mantenerme informado sobre nuevos eventos y actividades
            </label>
            <br />
            <input type="submit" value="Enviar" className="widthsetting" />
          </form>
        </div>
      
    );
  }
}