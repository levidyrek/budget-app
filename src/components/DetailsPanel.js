import React, {Component} from 'react';
import './stylesheets/DetailsPanel.css';
import InfoPanel from "./InfoPanel";
import BudgetTable from "./BudgetTable";
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';


export default class DetailsPanel extends Component {
    render() {
        return (
            <div className="DetailsPanel">
                <div className="tableView">
                    <Tabs className="Tabs">
                        <Tab label="Budget">
                            <BudgetTable/>
                        </Tab>
                        <Tab label="Transactions" />
                    </Tabs>
                </div>
                <InfoPanel visible={!this.props.mobileMode} />
            </div>
        );
    }
}