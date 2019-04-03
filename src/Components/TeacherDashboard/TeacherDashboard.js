import React, { Component } from "react";
import "./TeacherDashboard.scss";
import { SemanticToastContainer, toast } from "react-semantic-toasts";
import "react-semantic-toasts/styles/react-semantic-alert.css";
import { fetchStudents } from "../../actions/studentActions";
import { connect } from "react-redux";
import { Button, Icon, Label } from "semantic-ui-react";
import Sidebar from "../Sidebar/Sidebar";
import TeacherContent from "../TeacherContent/TeacherContent";
import TakeAttandance from "../TakeAttandance/TakeAttandance";

export default class TeacherDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      takeAttandance: false
    };
  }
  handleOnTakeAttandance = event => this.setState({ takeAttandance: true });
  closeTakeAttandance = () => this.setState({ takeAttandance: false });
  onTakeAttandance = event => {
    toast({
      type: "warning",
      icon: "camera",
      title: "SUCESS!!",
      description: "Triggered attandance taking system",
      animation: "bounce",
      time: 5000
    });
    this.setState({ takeAttandance: false });
  };
  render() {
    const { pendingRequests } = this.props;
    const { takeAttandance } = this.state;
    return (
      <div className="teacher-dashboard-container">
        <Sidebar />
        <SemanticToastContainer />;
        <div className="action-buttons">
          <Button
            icon
            labelPosition="left"
            // floated="left"
            className="action-button"
            onClick={this.handleOnTakeAttandance}
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
        {takeAttandance && (
          <TakeAttandance
            open={takeAttandance}
            hasCurrentClass
            onClose={this.closeTakeAttandance}
            onTakeAttandance={this.onTakeAttandance}
          />
        )}
      </div>
    );
  }
}
