import React, { Component } from 'react'
import './stylesheets/NavBar.css'
import { Redirect, Route } from 'react-router-dom'


export default class PrivateRoute extends Component {

    render() {
       const {component: Component, ...rest} = this.props

       const renderRoute = props => {
           if (true) {
              return (
                  <Component {...props} />
              )
           }

           const to = {
               pathname: '/login', 
               state: {from: props.location}
           }

           return (
               <Redirect to={to} />
           )
       }

       return (
           <Route {...rest} render={renderRoute}/>
       )
    }

}
