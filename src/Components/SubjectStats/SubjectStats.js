import React, { Component } from "react";
import "./SubjectStats.scss";
import { Button, Modal } from "semantic-ui-react";
// import { AttandanceModal } from "../AttandanceModal/AttandanceModal";
let sample_data = {
  attendance: [
    [
      "WTA",
      [
        "p",
        "w",
        "p",
        "a",
        "p",
        "w",
        "o",
        "p",
        "w",
        "p",
        "p",
        "a",
        "w",
        "o",
        "a",
        "w",
        "p",
        "p",
        "p",
        "w",
        "o",
        "p",
        "w",
        "p",
        "p",
        "p",
        "w",
        "o",
        "p",
        "w"
      ]
    ],
    [
      "ML",
      [
        "a",
        "p",
        "w",
        "w",
        "p",
        "p",
        "o",
        "p",
        "p",
        "w",
        "w",
        "p",
        "p",
        "o",
        "p",
        "p",
        "w",
        "w",
        "p",
        "p",
        "o",
        "p",
        "p",
        "w",
        "w",
        "p",
        "p",
        "o",
        "p",
        "w"
      ]
    ],
    [
      "ACA",
      [
        "p",
        "p",
        "p",
        "p",
        "p",
        "p",
        "o",
        "p",
        "p",
        "p",
        "p",
        "p",
        "p",
        "o",
        "p",
        "p",
        "p",
        "p",
        "p",
        "p",
        "o",
        "o",
        "p",
        "p",
        "a",
        "p",
        "p",
        "o",
        "w",
        "w"
      ]
    ],
    [
      "OR",
      [
        "w",
        "a",
        "p",
        "p",
        "p",
        "p",
        "o",
        "w",
        "a",
        "p",
        "p",
        "p",
        "p",
        "o",
        "w",
        "p",
        "p",
        "p",
        "a",
        "a",
        "o",
        "w",
        "p",
        "p",
        "p",
        "p",
        "p",
        "o",
        "w",
        "w"
      ]
    ]
  ]
};

export default class SubjectStats extends Component {
  state = { open: false };

  onClick = size => () => {
    console.log("logged");
    this.setState({ open: true });
  };
  close = () => this.setState({ open: false });

  getStyle(Style) {
    if (Style === "p") {
      return {
        backgroundColor: "#55BC77",
        color: "#55BC77"
      };
    } else if (Style === "a") {
      return {
        backgroundColor: "tomato",
        color: "tomato"
      };
    } else if (Style === "o") {
      return {
        backgroundColor: "orange",
        color: "orange"
      };
    }
  }
  render() {
    const { open } = this.state;
    // console.log(sample_data);
    if (this.state.open) {
      // return <AttandanceModal size={this.state.size} open={this.state.open} />;
      return (
        <div>
          <Modal open={open} onClose={this.close} dimmer="blurring">
            <Modal.Header>Raise Query</Modal.Header>
            <Modal.Content>
              <p>
                If you are present on this day and is marked absent, please
                raise a query, we will make sure our algorithm recognizes you
                better,
              </p>
            </Modal.Content>
            <Modal.Actions>
              <Button positive onClick={this.close}>
                Cancel
              </Button>
              <Button animated="fade" onClick={this.close} negative>
                <Button.Content visible>
                  Click here if marked absent
                </Button.Content>
                <Button.Content hidden>Raise Query</Button.Content>
              </Button>
            </Modal.Actions>
          </Modal>
        </div>
      );
    }
    return (
      <React.Fragment>
        <div className="stats-container">
          {sample_data["attendance"].map((subject, i) => (
            <div className="subject" key={i}>
              <span>{subject[0]}</span>
              {subject[1].map((att, index) => (
                <div
                  key={index}
                  className="attendance"
                  onClick={this.onClick(att)}
                  style={this.getStyle(att)}
                />
              ))}
            </div>
          ))}
        </div>
        <div className="stats-container-mobile">
          {sample_data["attendance"].map((subject, i) => (
            <div className="subject" key={i}>
              <span>{subject[0]}</span>
              {subject[1].slice(-7).map((att, index) => (
                <div
                  className="attendance"
                  key={index}
                  onClick={this.onClick(att)}
                  style={this.getStyle(att)}
                />
              ))}
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
