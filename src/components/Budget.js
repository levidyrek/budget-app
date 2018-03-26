import React, {Component} from 'react'
import './stylesheets/Budget.css'
import NavBar from '../containers/NavBar'
import TopBar from '../containers/TopBar'
import Expenses from "../containers/Expenses"
import { enableMobileMode } from '../actions/responsive'
import DialogController from '../containers/DialogController'
import { Route } from 'react-router-dom'


const MOBILE_WIDTH_BREAKPOINT = 800


export default class Budget extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbarEnabled: false
        }

        this.updateWindowDimensions()
    }

    render() {
        const {match} = this.props
        return (
            <div className="budget-layout">
                {
                    (!this.props.mobileMode || this.props.navbarEnabled) &&
                    <NavBar />
                }
                <div className="main-content">
                    <TopBar />
                    <Route path={`${match.path}/expenses`} component={Expenses} />
                </div>
                <DialogController/>
            </div>
        )
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateWindowDimensions)
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateWindowDimensions)
    }

    updateWindowDimensions = () => {
        this.props.dispatch(enableMobileMode(window.innerWidth < MOBILE_WIDTH_BREAKPOINT))
    }
}
