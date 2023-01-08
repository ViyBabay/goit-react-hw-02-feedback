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
    this.setState((prevState) => ({good: prevState.good +1}), () => console.log(this.state.good))
  }

  handleNeutral= () => {
    this.setState((prevState) => ({neutral: prevState.neutral +1}), () => console.log(this.state.neutral))
  }

  handleBad= () => {
    this.setState((prevState) => ({bad: prevState.bad +1}), () => console.log(this.state.bad))
  }

    render() {
      const { good, neutral, bad } = this.state;
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
        <h3 className="stat-tittle">Statistics</h3>
        <ul className="stat-list">
          <li className="stat-item">Good :{good}</li>
          <li className="stat-item">Neutral :{neutral}</li>
          <li className="stat-item">Bad :{bad}</li>
        </ul>
      </div>
    );
  }
}
