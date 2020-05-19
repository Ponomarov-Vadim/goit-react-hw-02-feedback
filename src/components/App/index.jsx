import React, { Component } from "react";

import Section from "../Section";
import Notification from "../Notification";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";

const countTotalFeedback = (bad, good, neutral) => bad + good + neutral;

const countPositiveFeedbackPercentage = (bad, good, neutral) => {
  const total = countTotalFeedback(bad, good, neutral);
  return total > 0 ? Math.floor((good / total) * 100) : 0;
};

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = ({ target: { name } }) => {
    this.setState({ [name]: this.state[name] + 1 });
  };

  render() {
    const { bad, good, neutral } = this.state;

    const total = countTotalFeedback(bad, good, neutral);

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions onLeaveFeedback={this.handleClick} />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={countPositiveFeedbackPercentage(
                bad,
                good,
                neutral
              )}
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
