import React, { Component } from "react";

export default class AttandanceDescription extends Component {
  render() {
    const { color } = this.props;
    if (color === "o") {
      return <div>Was a public holiday</div>;
    } else if (color === "w") {
      return <div>No class at that day</div>;
    } else if (color === "p") {
      return <div>You were present on that day</div>;
    } else {
      return <div>You were absent on this day.</div>;
    }
  }
}
