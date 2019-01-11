import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import Fab from '@material-ui/core/Fab';
import ContentAdd from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import './stylesheets/DetailsPanel.css';
import InfoPanel from './InfoPanel';


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

  fetchDataIfNeeded = () => {
    const { fetchDataIfNeeded } = this.props;
    fetchDataIfNeeded();
  }

  render() {
    const {
      checkIfLoading, handleClickAdd, mobileMode, table,
    } = this.props;

    return (
      (
        !checkIfLoading()
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
  checkIfLoading: PropTypes.func.isRequired,
  handleClickAdd: PropTypes.func.isRequired,
  fetchDataIfNeeded: PropTypes.func.isRequired,
  mobileMode: PropTypes.bool.isRequired,
  table: PropTypes.node.isRequired,
};

export default withTheme()(DetailsPanel);
