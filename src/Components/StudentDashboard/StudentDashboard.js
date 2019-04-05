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
import Loading from "../Loading/Loading";

class Dashboard extends Component {
  //   static propTypes = {
  //     prop: PropTypes
  //   };
  constructor(props) {
    super(props);
    this.state = { imageStatus: "loading" };
  }

  componentWillMount() {
    this.props.fetchStudents();
  }

  handleImageLoaded() {
    this.setState({ imageStatus: "loaded" });
  }

  handleImageErrored() {
    this.setState({ imageStatus: "failed to load" });
  }

  render() {
    const { studentID } = this.props;
    // console.log("rendered!!", studentID, new Date().getTime());
    if (!studentID) {
      return <Loading />;
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

          <img
            src={BasicGraph}
            alt="BasicGraph"
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
          <img
            src={WeaklyAttendance}
            alt="Weakly Attendance"
            onLoad={this.handleImageLoaded.bind(this)}
            onError={this.handleImageErrored.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  studentID: state.user.id
});

export default connect(
  mapStatesToProps,
  { fetchStudents }
)(Dashboard);
