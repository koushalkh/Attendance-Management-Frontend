import React, { Component } from "react";
import "./SubjectList.scss";
class Subject extends Component {
  onClick(e) {
    console.log("clicked!", e);
    alert("clicked");
  }
  getStyle(Style) {
    return {
      backgroundColor: Style,
      color: Style
    };
  }
  render() {
    // console.log(this.props.attendance);
    return (
      <div className="subject-container">
        <span>Subject 1</span>
        {this.props.attendance.map(DayAttendance => (
          <div
            style={this.getStyle(DayAttendance)}
            onClick={() => this.onClick(DayAttendance)}
          >
            {" "}
            ...
          </div>
        ))}
      </div>
    );
  }
}

export default class SubjectList extends Component {
  render() {
    const { subjects } = this.props;
    // console.log("SUBJECTS:", subjects);
    return (
      <div>
        {subjects.map(subject => (
          <Subject attendance={subject} />
        ))}
      </div>
    );
  }
}
