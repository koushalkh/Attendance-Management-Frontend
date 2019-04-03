import React, { Component } from "react";
import "./TeacherDashboard.scss";

import { fetchStudents } from "../../actions/studentActions";
import { connect } from "react-redux";
import { Button, Icon, Label } from "semantic-ui-react";
import Sidebar from "../Sidebar/Sidebar";
import TeacherContent from "../TeacherContent/TeacherContent";

export default class TeacherDashboard extends Component {
  render() {
    const { pendingRequests } = this.props;
    return (
      <div className="teacher-dashboard-container">
        <Sidebar />
        <div className="action-buttons">
          <Button
            icon
            labelPosition="left"
            // floated="left"
            className="action-button"
          >
            <Icon name="play" />
            Take Attendance
          </Button>
          <Button
            as="div"
            labelPosition="right"
            // floated="right"
            className="action-button"
          >
            {/* add basic to button to make blue go away */}
            <Button color="blue">
              <Icon name="fork" />
              Handle Queries
            </Button>
            <Label as="a" basic color="blue" pointing="left">
              4
            </Label>
          </Button>
        </div>
        <TeacherContent />
      </div>
    );
  }
}
