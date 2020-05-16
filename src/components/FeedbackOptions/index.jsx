import React from "react";
import styled from "./feedbackOptions.module.css";
import PropTypes from "prop-types";

const FeedbackOptions = ({ onLeaveFeedback }) => (
  <>
    <button className={styled.button} name="good" onClick={onLeaveFeedback}>
      Good
    </button>
    <button className={styled.button} name="neutral" onClick={onLeaveFeedback}>
      Neutral
    </button>
    <button className={styled.button} name="bad" onClick={onLeaveFeedback}>
      Bad
    </button>
  </>
);

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
};
