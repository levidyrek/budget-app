import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Fab from '@material-ui/core/Fab';
import ContentAdd from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import './stylesheets/DetailsPanel.css';
import InfoPanel from './InfoPanel';
import { fetchBudgets, fetchSelectedBudget } from '../actions/budgets';


class DetailsPanel extends Component {
  addButtonStyle = {
    bottom: 0,
    right: 0,
    position: 'absolute',
    marginRight: '35px',
    marginBottom: '20px',
  }

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
    const { budgets, dispatch, selectedBudget } = this.props;

    // If budgets are have not been fetched or are being fetched, fetch them.
    if (!budgets.fetching && !budgets.items) {
      dispatch(fetchBudgets());
    } else if (budgets.items && !selectedBudget.fetching && selectedBudget.invalidated) {
      // If budgets have been fetched, but selected budget hasn't been, fetch it.
      dispatch(fetchSelectedBudget(selectedBudget.month, selectedBudget.year));
    }
  }

  render() {
    const {
      handleClickAdd, mobileMode, table,
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
              <Fab
                style={this.addButtonStyle}
                onClick={handleClickAdd}
                color="primary"
              >
                <ContentAdd />
              </Fab>
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
  dispatch: PropTypes.func.isRequired,
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

export default withTheme()(DetailsPanel);
