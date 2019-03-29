import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../actions/userActions";
import "./Login.scss";
import "./util.scss";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      username: "",
      password: ""
    };
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onClick(e) {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password);
  }
  render() {
    if (this.props.type !== undefined) {
      if (this.props.type === "student") {
        return <Redirect to="/student" />;
      } else if (this.props.type === "teacher") {
        return <Redirect to="/teacher" />;
      }
    }
    return (
      <div>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100 p-t-50 p-b-90">
              <form className="login100-form validate-form flex-sb flex-w">
                <span className="login100-form-title p-b-51">Login</span>

                <div
                  className="wrap-input100 validate-input m-b-16"
                  data-validate="Username is required"
                >
                  <input
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="Username"
                    onChange={this.onChange}
                  />
                  <span className="focus-input100" />
                </div>

                <div
                  className="wrap-input100 validate-input m-b-16"
                  data-validate="Password is required"
                >
                  <input
                    className="input100"
                    type="password"
                    name="password"
                    placeholder="Password"
                    onChange={this.onChange}
                  />
                  <span className="focus-input100" />
                </div>

                <div className="flex-sb-m w-full p-t-3 p-b-24">
                  <div className="contact100-form-checkbox">
                    <input
                      className="input-checkbox100"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                    />
                    <label className="label-checkbox100" htmlFor="ckb1">
                      Remember me
                    </label>
                  </div>

                  <div>
                    <div className="txt1">Forgot?</div>
                  </div>
                </div>

                <div className="container-login100-form-btn m-t-17">
                  <button
                    className="login100-form-btn"
                    type="submit"
                    onClick={this.onClick}
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  type: state.user.type,
  key: state.user.KEY
});

export default connect(
  mapStatesToProps,
  { login }
)(Login);
