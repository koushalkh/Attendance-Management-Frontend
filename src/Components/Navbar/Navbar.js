import React, { Component } from "react";
import { Icon } from "semantic-ui-react";
import "./Navbar.scss";
export default class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <Icon name="book" color="grey" />
        <span>Attendance Management System</span>
        <div className="logout">Logout</div>
      </div>
    );
  }
}
