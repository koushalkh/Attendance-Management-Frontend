import React, { Component } from "react";

// import PropTypes from "prop-types";

import { fetchStudents } from "../../actions/studentActions";
import { connect } from "react-redux";

import Sidebar from "../Sidebar/Sidebar";
// import History from "../../assets/history.png";
import BasicGraph from "../../assets/basic_graph.png";
import WeaklyAttendance from "../../assets/weakly_attendance.png";
// import { Image } from "semantic-ui-react";
import "./StudentDashboard.scss";
// import SubjectList from "../SubjectList/SubjectList";
import SubjectStats from "../SubjectStats/SubjectStats";

class Dashboard extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   };

  componentWillMount() {
    this.props.fetchStudents();
  }
  render() {
    const { studentID } = this.props;
    // console.log("rendered!!", studentID, new Date().getTime());
    if (!studentID) {
      return <div>loading...</div>;
    }
    return (
      <div className="dashboard-container">
        <Sidebar />
        {/* <SubjectList
          subjects={[["blue", "red"], ["blue", "green"], ["blue", "orange"]]}
        /> */}

        <SubjectStats />
        <div className="graphs">
          {/* <Image
              className="history"
              src={History}
              alt="attendance history"
              size="massive"
              wrapped
            /> */}

          <img src={BasicGraph} alt="BasicGraph" />
          <img src={WeaklyAttendance} alt="Weakly Attendance" />
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  studentID: state.student.studentID
});

export default connect(
  mapStatesToProps,
  { fetchStudents }
)(Dashboard);
