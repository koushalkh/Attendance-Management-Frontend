import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Image } from "semantic-ui-react";
import { fetchStudents } from "../../actions/studentActions";
import Navbar from "../Navbar/Navbar";
import "./Sidebar.scss";
import GraProfile from "../../assets/person.jpeg";

class Sidebar extends Component {
  static propTypes = {
    user: PropTypes.object,
    fetchUser: PropTypes.func
  };

  componentDidMount() {
    this.props.fetchStudents();
  }

  render() {
    const { student } = this.props;
    if (!student) {
      return <div>Loading12</div>;
    }
    return (
      <div>
        <Navbar />
        <div className="sidebar">
          <Image
            // src="https://react.semantic-ui.com/images/wireframe/square-image.png"
            src={GraProfile}
            size="small"
            className="profile-image"
            circular
          />
          <div className="user-details">
            <div>
              Name: <span>{student.username}</span>
            </div>
            <div>
              Class: <span>{student.class}</span>
            </div>
            <div>
              Email: <span>{student.email}</span>
            </div>
            <div>
              Phone: <span>{student.phone}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStatesToProps = state => ({
  user:
    state.user.type === "student"
      ? state.student.student
      : state.user.type === "teacher"
      ? state.teacher.teacher
      : state.manager.manager
});

export default connect(
  mapStatesToProps,
  { fetchStudents }
)(Sidebar);
