// import { render } from '@testing-library/react';
import React, { Component } from 'react';
// import PropTypes from "prop-types";

// let good = 0

export class Statistics extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleGood = () => {
    this.setState(
      prevState => ({ good: prevState.good + 1 }),
      () => console.log(this.state.good)
    );
  };

  handleNeutral = () => {
    this.setState(
      prevState => ({ neutral: prevState.neutral + 1 }),
      () => console.log(this.state.neutral)
    );
  };

  handleBad = () => {
    this.setState(
      prevState => ({ bad: prevState.bad + 1 }),
      () => console.log(this.state.bad)
    );
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <h2 className="title">Please leave feedback</h2>
        <ul className="btn-list">
          <li className="btn-item">
            <button type="button" className="btn" onClick={this.handleGood}>
              Good
            </button>
          </li>
          <li className="btn-item">
            <button type="button" className="btn" onClick={this.handleNeutral}>
              Neutral
            </button>
          </li>
          <li className="btn-item">
            <button type="button" className="btn" onClick={this.handleBad}>
              Bad
            </button>
          </li>
        </ul>
        {total > 0 ? (
          <ul>
            <li className="stat-item">Good: {good}</li>
            <li className="stat-item">Neutral: {neutral}</li>
            <li className="stat-item">Bad: {bad}</li>
            <li className="stat-item">Total: {total}</li>
            <li className="stat-item">Positive feedback: {positive} %</li>
          </ul>
        ) : (
          <h3>There is no feedback</h3>
        )}
      </div>
    );
  }
}
