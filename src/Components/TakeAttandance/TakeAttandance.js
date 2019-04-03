import React, { Component } from "react";
import { Button, Modal } from "semantic-ui-react";

export default class TakeAttandance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    const { open } = this.state;
    const { hasCurrentClass, onClose, onTakeAttandance } = this.props;
    return (
      <React.Fragment>
        <div>
          <Modal open={open} onClose={onClose} dimmer="blurring" closeIcon>
            <Modal.Header>Take Attandance</Modal.Header>
            {!hasCurrentClass && (
              <Modal.Content>
                <p>
                  There doesnt seem to be any classes at this particular time on
                  your Schedule
                </p>
              </Modal.Content>
            )}
            {hasCurrentClass && (
              <Modal.Content>
                <p style={{ color: "tomato" }}>
                  <b>
                    Are you sure you want to take Attandance now? Attandance can
                    only be taken once per class
                  </b>
                </p>
              </Modal.Content>
            )}
            <Modal.Actions>
              <Button positive onClick={onClose}>
                Cancel
              </Button>
              {hasCurrentClass && (
                <Button onClick={onTakeAttandance} negative>
                  <span>Take Attandance</span>
                </Button>
              )}
            </Modal.Actions>
          </Modal>
        </div>
      </React.Fragment>
    );
  }
}
