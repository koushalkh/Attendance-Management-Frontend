import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import StudentDashboard from "./Components/StudentDashboard/StudentDashboard";
import Login from "./Components/Login/Login";
// import SubjectStats from "./Components/SubjectStats/SubjectStats";
import TeacherDashboard from "./Components/TeacherDashboard/TeacherDashboard";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <link
          href="https://fonts.googleapis.com/css?family=Sniglet"
          rel="stylesheet"
        />
        <div className="App">
          <Router>
            <div>
              <Route exact path="/" component={Login} />
              <Route path="/student" component={StudentDashboard} />
              {/* <Route path="/teacher" component={Dashboard} /> */}
              <Route path="/teacher" component={TeacherDashboard} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
