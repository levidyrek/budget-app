import React, { Component } from 'react';
import './stylesheets/DetailsPanel.css';
import Fab from '@material-ui/core/Fab';
import ContentAdd from '@material-ui/icons/Add';
import PropTypes from 'prop-types';
import { withTheme } from '@material-ui/core/styles';

import InfoPanel from './InfoPanel';


class DetailsPanel extends Component {
  addButtonStyle = {
    bottom: 0,
    right: 0,
    position: 'absolute',
    marginRight: '35px',
    marginBottom: '20px',
  }

  render() {
    const { handleClickAdd, mobileMode, table } = this.props;

    return (
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
        {!mobileMode
          && <InfoPanel />
        }
      </div>
    );
  }
}

DetailsPanel.propTypes = {
  handleClickAdd: PropTypes.func.isRequired,
  mobileMode: PropTypes.bool.isRequired,
  table: PropTypes.node.isRequired,
};

export default withTheme()(DetailsPanel);
