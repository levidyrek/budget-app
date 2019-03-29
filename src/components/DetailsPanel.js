import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Fab from '@material-ui/core/Fab';
import ContentAdd from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import './stylesheets/DetailsPanel.css';
import InfoPanel from './InfoPanel';


class DetailsPanel extends Component {
  constructor(props) {
    super(props);
    this.fetchDataIfNeeded();
  }

  componentDidUpdate() {
    this.fetchDataIfNeeded();
  }

  checkIfLoading = () => {
    const { budgets, selectedBudget } = this.props;

    return budgets.fetching || !budgets.items
      || selectedBudget.fetching || !selectedBudget.budget;
  }

  fetchDataIfNeeded = () => {
    const { budgets, fetchBudgets, fetchSelectedBudget, selectedBudget } = this.props;

    // If budgets are have not been fetched or are being fetched, fetch them.
    if (!budgets.fetching && !budgets.items) {
      fetchBudgets();
    } else if (budgets.items && !selectedBudget.fetching && selectedBudget.invalidated) {
      // If budgets have been fetched, but selected budget hasn't been, fetch it.
      fetchSelectedBudget(selectedBudget.month, selectedBudget.year);
    }
  }

  render() {
    const {
      buttons, children, handleClickAdd, mobileMode, table,
    } = this.props;

    return (
      (
        !this.checkIfLoading()
        && (
          <div className="DetailsPanel">
            <div className="tableView">
              <div className="currentTable">
                {table}
              </div>
              <div className="fabs">
                {buttons}
                <Fab
                  onClick={handleClickAdd}
                  color="primary"
                >
                  <ContentAdd />
                </Fab>
              </div>
              <div>
                {children}
              </div>
            </div>
            {
              !mobileMode
              && <InfoPanel />
            }
          </div>
        )
      )
      || <ReactLoading type="bars" color="#444" />
    );
  }
}

DetailsPanel.propTypes = {
  budgets: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
    items: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  buttons: PropTypes.arrayOf(PropTypes.node),
  children: PropTypes.node.isRequired,
  handleClickAdd: PropTypes.func.isRequired,
  mobileMode: PropTypes.bool.isRequired,
  selectedBudget: PropTypes.shape({
    fetching: PropTypes.bool.isRequired,
    invalidated: PropTypes.bool.isRequired,
    month: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
  }).isRequired,
  table: PropTypes.node.isRequired,
};

DetailsPanel.defaultProps = {
  buttons: [],
};

export default withTheme()(DetailsPanel);
