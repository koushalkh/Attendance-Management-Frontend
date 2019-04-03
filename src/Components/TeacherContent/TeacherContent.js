import React, { Component } from "react";
import { Grid, List } from "semantic-ui-react";
import "./TeacherContent.scss";
export default class TeacherContent extends Component {
  render() {
    const mock_timetable = [
      { time: "01:00PM", room: "305", subject: "ML", class: "4A" },
      { time: "02:00PM", room: "205", subject: "ACA", class: "7B" },
      { time: "02:50PM", room: "202", subject: "ML", class: "4A" },
      { time: "03:30PM", room: "201", subject: "ACA", class: "7B" }
    ];
    const past_classes = [
      {
        time: "11:00AM",
        room: "205",
        subject: "DAA",
        class: "7B",
        attandance: 23,
        total: 60
      },
      {
        time: "12:00AM",
        room: "207",
        subject: "ACA",
        class: "8A",
        attandance: 56,
        total: 70
      }
    ];
    return (
      <div className="teacher-content-container">
        <Grid divided columns={2} stackable>
          <Grid.Row>
            <Grid.Column width={8} className="mini-container">
              <h2>Past Classes</h2>
              <List>
                <List.Item>
                  <div className="time-title past-column">
                    <span>Time</span>
                    <span>Subject</span>
                    <span>Class</span>
                    <span>Present</span>
                    <span>Attandance%</span>
                  </div>
                </List.Item>
                {past_classes.map((period, index) => (
                  <List.Item className="time-periods" key={index}>
                    <div className="past-column">
                      <span>{period.time}</span>
                      <span>{period.subject}</span>
                      <span>{period.class}</span>
                      <span>
                        {period.attandance}/{period.total}
                      </span>
                      <span>
                        {((period.attandance / period.total) * 100.0).toFixed(
                          2
                        )}
                        %
                      </span>
                    </div>
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
            <Grid.Column width={8} className="mini-container">
              <h2>Upcoming Classes for today</h2>
              <h2>({new Date().toLocaleDateString()})</h2>
              <List>
                <List.Item>
                  <div className="time-title time-column">
                    <span>Time</span>
                    <span>Room</span>
                    <span>Subject</span>
                    <span>Class</span>
                  </div>
                </List.Item>
                {mock_timetable.map((period, index) => (
                  <List.Item key={index} className="time-periods">
                    <div className="time-column">
                      <span>{period.time}</span>
                      <span>{period.room}</span>
                      <span>{period.subject}</span>
                      <span>{period.class}</span>
                    </div>
                  </List.Item>
                ))}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}
