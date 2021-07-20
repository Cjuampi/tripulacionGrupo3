import React from "react";
import '../login/Login.css';

class Input extends React.Component {
  render() {
    return (
      <div>
        <input
          type={this.props.type}
          id={this.props.id}
          className="form-control"
          placeholder={this.props.text}
          value={this.props.value}
          onChange={this.props.onChange}
          required=""
          autofocus=""
          style={{}}
        />
      </div>
    );
  }
}

/* class Image extends React.Component {//falta poner enlace a logo si queremos
  render() {
    return (
      <div>
        <img
          className="mb-4"
          src={this.props.src}
          alt=""
          width="72"
          height="72"
        />
      </div>
    );
  }
} */

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="h3 mb-3 font-weight-normal">{this.props.text}</h1>
      </div>
    );
  }
}

class Button extends React.Component {
  render() {
    return (
      <div>
        <button
          className="btn btn-lg btn-primary btn-block"
          type="button"
          onClick={this.props.onClick}
        >
          {this.props.placeholder}
        </button>
      </div>
    );
  }
}

class RegisterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      signIn: false,
      reload: true
    };
  }

  onChangeEmail = event => {
    console.log(event.target.value);
    this.setState({
      email: event.target.value
    });
  };

  onChangePassWord = event => {
    console.log(event.target.value);
    this.setState({
      password: event.target.value
    });
  };

  onClick = event => {
    // event.preventdefault();
    console.log(event.target);
    this.setState({
      signIn: true
    });

    if (this.state.email !== "" && this.state.password !== "") {
      this.setState({
        reload: false
      });

      setTimeout(() => {
        this.setState({
          reload: true
        });
      }, 5000);
    }
  };

  render() {
    const { email, password, signIn, reload } = this.state;
    const altertStyle = {
      color: "red"
    };
    return (
      <React.Fragment>
        {reload ? (
          <form className="form-signin">
            {/* <Image src="#" /> */}
            <Header text="LogIn" />
            <Input
              id="inputEmail"
              text="Email "
              type="email"
              value={email}
              onChange={this.onChangeEmail}
            />
            <Input
              id="inputPassword"
              text="Password"
              type="password"
              value={password}
              onChange={this.onChangePassWord}
            />
            <label>
              <input type="checkbox" value="remember-me" /> Recuérdame
            </label>
            <Button className='submitBtn' placeholder="Enviar" onClick={this.onClick} />

            {(email === "" || password === "") && signIn ? (
              <h6 color="red" style={altertStyle}>
                El email y la contraseña no pueden estar vacíos
              </h6>
            ) : null}
            
          </form>
        ) : (
          <div className="form-signin">
            <div className="loader" />
            <hr />
            <h3 className="h3 mb-3 font-weight-normal">
              Login con <b>{email}</b>
            </h3>
            <h5>Password: {password}</h5>
            
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default RegisterScreen;
