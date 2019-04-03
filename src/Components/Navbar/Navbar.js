import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { logout } from "../../actions/userActions";
import { withRouter } from "react-router-dom";
import "./Navbar.scss";
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onLogout = this.onLogout.bind(this);
  }
  onLogout(e) {
    this.props.logout();
    this.props.history.push("/");
  }
  render() {
    return (
      <div className="nav-bar">
        <div className="Navicon">
          <Icon name="book" color="grey" />
        </div>
        <span>Attendance Management System</span>
        <button className="logout" onClick={this.onLogout}>
          Logout
        </button>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  logout: state.user.logout
});

export default connect(
  mapStatesToProps,
  { logout }
)(withRouter(Navbar));
