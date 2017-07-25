import React, {Component} from 'react';
import './stylesheets/DetailsPanel.css';
import InfoPanel from "./InfoPanel";
import BudgetTable from "../containers/BudgetTable";
import {Tabs, Tab} from 'material-ui/Tabs';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AddBudgetCategoryDialog from '../containers/AddBudgetCategoryDialog';
import { ADD_BUDGET_CATEGORY_DIALOG } from '../components/AddBudgetCategoryDialog';
import { toggleDialog } from '../actions/dialogs';


export default class DetailsPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
           dialog: 0
        };
    }

    addButtonStyle = {
        bottom: 0,
        right: 0,
        position: 'absolute',
        marginRight: '35px',
        marginBottom: '20px'
    };

    handleClickAdd = event => {
        this.props.dispatch(toggleDialog(ADD_BUDGET_CATEGORY_DIALOG));
    };

    render() {
        return (
            <div className="DetailsPanel">
                <div className="tableView">
                    <Tabs className="Tabs" >
                        <Tab label="Budget"/>
                        <Tab label="Transactions"/>
                    </Tabs>
                    <div className="currentTable">
                        <BudgetTable/>
                    </div>
                    <FloatingActionButton
                        style={this.addButtonStyle}
                        onTouchTap={this.handleClickAdd}
                    >
                        <ContentAdd />
                    </FloatingActionButton>
                    <AddBudgetCategoryDialog />
                </div>
                {!this.props.mobileMode &&
                    <InfoPanel />
                }
            </div>
        );
    }
}