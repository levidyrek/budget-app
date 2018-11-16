import React, { Component } from 'react';
import './stylesheets/MonthPicker.css';
import ActionToday from '@material-ui/icons/Today';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';

const MONTHS = [
  'JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN',
  'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC',
];

export default class MonthPicker extends Component {
  constructor(props) {
    super(props);

    const currentDate = new Date();
    this.state = {
      month: currentDate.getMonth() + 1,
      year: currentDate.getFullYear(),
    };
  }

  switchToPrevious = () => {
    this.setState((state) => {
      let month = state.month - 1;
      let { year } = state;
      if (month < 1) {
        month = 12;
        year -= 1;
      }

      return {
        month,
        year,
      };
    });
  }

  switchToNext = () => {
    this.setState((state) => {
      let month = state.month + 1;
      let { year } = state;
      if (month > 12) {
        month = 1;
        year += 1;
      }

      return {
        month,
        year,
      };
    });
  }

  getCurrentMonth = () => {
    const { month } = this.state;
    return MONTHS[month - 1];
  }

  componentDidUpdate = () => {
    const { changeMonth } = this.props;
    const { year } = this.state;
    const month = this.getCurrentMonth();

    changeMonth(month, year);
  }

  render() {
    const { year } = this.state;
    const month = this.getCurrentMonth();

    return (
      <div className="MonthPicker">
        <Button
          className="button-left"
          onClick={this.switchToPrevious}
        >
          <KeyboardArrowLeft />
        </Button>
        <ActionToday />
        <span className="dateText">
          <span id="month">{month}</span>
          <span id="year">{year}</span>
        </span>
        <Button
          className="button-right"
          onClick={this.switchToNext}
        >
          <KeyboardArrowRight />
        </Button>
      </div>
    );
  }
}

MonthPicker.propTypes = {
  changeMonth: PropTypes.func.isRequired,
};
