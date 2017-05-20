import React, {Component} from 'react';
import './stylesheets/BudgetDetailsPanel.css';
import InfoPanel from "./InfoPanel";
import BudgetTable from "./BudgetTable";


export default class BudgetDetailsPanel extends Component {
    render() {
        return (
            <div className='BudgetDetailsPanel'>
                <BudgetTable/>
                <InfoPanel/>
            </div>
        );
    }
}