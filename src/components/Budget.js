import React, { Component } from 'react';
import './stylesheets/Budget.css';
import { Route, Redirect, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';

import NavBar from '../containers/NavBar';
import TopBar from '../containers/TopBar';
import Expenses from '../containers/Expenses';
import Transactions from '../containers/Transactions';
import DialogController from '../containers/DialogController';


const MOBILE_WIDTH_BREAKPOINT = 800;


class Budget extends Component {
  constructor(props) {
    super(props);

    this.updateWindowDimensions();
  }

  componentDidMount() {
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    const { enableMobileMode } = this.props;

    enableMobileMode(window.innerWidth < MOBILE_WIDTH_BREAKPOINT);
  }

  render() {
    const { match, mobileMode, navbarEnabled } = this.props;
    return (
      <div className="budget-layout">
        {
          (!mobileMode || navbarEnabled)
          && <NavBar />
        }
        <div className="main-content">
          <TopBar />
          <Switch>
            <Route path={`${match.path}/expenses`} component={Expenses} />
            <Route path={`${match.path}/transactions`} component={Transactions} />
            <Redirect to={`${match.path}/expenses`} />
          </Switch>
        </div>
        <DialogController />
      </div>
    );
  }
}

Budget.propTypes = {
  enableMobileMode: PropTypes.func.isRequired,
  match: PropTypes.shape({
    path: PropTypes.string.isRequired,
  }).isRequired,
  mobileMode: PropTypes.bool.isRequired,
  navbarEnabled: PropTypes.bool.isRequired,
};

export default Budget;
