import React, {Component} from 'react';
import AddBudgetCategoryDialog from "../containers/AddBudgetCategoryDialog";
import { ADD_BUDGET_CATEGORY_DIALOG } from "./AddBudgetCategoryDialog";

export default class DialogController extends Component {
    render() {
        return (
            <div>
                {this.props.dialogs[ADD_BUDGET_CATEGORY_DIALOG] &&
                    <AddBudgetCategoryDialog />
                }
            </div>
        );
    }
}