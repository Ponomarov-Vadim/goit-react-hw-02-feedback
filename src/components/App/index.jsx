import React, { Component } from "react";

import Section from "../Section";
import Notification from "../Notification";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target: { name } }) => {
    this.setState({ [name]: this.state[name] + 1 });
  };

  countTotalFeedback = () =>
    this.state.bad + this.state.good + this.state.neutral;

  countPositiveFeedbackPercentage = () =>
    this.countTotalFeedback() > 0
      ? Math.floor((this.state.good / this.countTotalFeedback()) * 100)
      : 0;

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleClick} />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
