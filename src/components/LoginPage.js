import React, { Component } from 'react'
import ReactSignupLoginComponent from 'react-signup-login-component'
import './stylesheets/LoginPage.css'

export default class LoginPage extends Component {

    constructor(props) {
        super(props)
        this.state = {
            error: "",
            username: "",
            password: ""
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
        return (
            <div>
                <h2>Budget App</h2>
                <p id="error">
                    {this.state.error || this.props.token.error}
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