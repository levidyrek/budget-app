import React, { Component } from 'react'
import './stylesheets/LoginPage.css'
import ReactLoading from 'react-loading'
import { Redirect } from 'react-router-dom'

export default class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: "",
            username: "",
            password: ""
        }

        // If not authenticated but not verified, verify.
        const { auth, fetchUserInfo } = this.props
        if (!auth.authenticated && !auth.verified && !auth.fetching) {
            fetchUserInfo()
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleLogin = (event) => {
        const { username, password } = this.state
        if (!username.length) {
            this.setState({
                error: "Username is required."
            })
        } else if (!password.length) {
            this.setState({
                error: "Password is required."
            })
        } else {
            this.setState({
                error: ""
            })
            this.props.fetchAuthToken(this.state.username, this.state.password)
        }
    }

    render() {
        if (this.props.auth.fetching) {
            return (
                <ReactLoading type="bars" color="#444" />
            )
        }

        if (this.props.auth.authenticated) {
            const to = {
                pathname: this.props.location.state.from, 
                state: {from: '/login'}
            }

            return (
                <Redirect to={to} />
            )
        }

        return (
            <div>
                <h2>Budget App</h2>
                <p id="error">
                    {this.state.error || this.props.auth.error}
                </p>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    onChange={this.handleInputChange} />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={this.handleInputChange} />
                <input
                    id="submit"
                    type="submit"
                    value="Log in"
                    onClick={this.handleLogin} />
            </div>
        )
    }
}