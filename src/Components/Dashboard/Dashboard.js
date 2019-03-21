import React, { Component } from "react";

import PropTypes from "prop-types";

import { fetchStudents } from "../../actions/studentActions";
import { connect } from "react-redux";

class Dashboard extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   };

  componentDidMount() {
    this.props.fetchStudents();
  }
  render() {
    const { studentID } = this.props;
    console.log("rendered!!", studentID, new Date().getTime());
    if (!studentID) {
      return <div>loading...</div>;
    }
    return <div>{studentID}</div>;
  }
}

const mapStatesToProps = state => ({
  studentID: state.student.studentID
});

export default connect(
  mapStatesToProps,
  { fetchStudents }
)(Dashboard);
