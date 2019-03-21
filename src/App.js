import React, { Component } from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store/store";
import Dashboard from "./Components/Dashboard/Dashboard";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Dashboard />
        </div>
      </Provider>
    );
  }
}

export default App;
