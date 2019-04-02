import React, { Component } from "react";
import "./TeacherDashboard.scss";

import { fetchStudents } from "../../actions/studentActions";
import { connect } from "react-redux";

import Sidebar from "../Sidebar/Sidebar";

export default class TeacherDashboard extends Component {
  render() {
    return (
      <div>
        <Sidebar />
      </div>
    );
  }
}
