import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Dashboard from "./Components/Dashboard/Dashboard";
import Login from "./Components/Login/Login";

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
              <Route path="/student" component={Dashboard} />
            </div>
          </Router>
        </div>
      </Provider>
    );
  }
}

export default App;
