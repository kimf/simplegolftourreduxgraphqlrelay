import React, { Component, PropTypes } from 'react'
import auth from '../lib/AuthService'

class Logout extends Component {
  componentDidMount() {
    auth.logout()
    this.context.router.replace('/')
  }

  render() {
    return <p>You are now logged out</p>
  }
}

Logout.contextTypes = {
  router: PropTypes.object.isRequired
}

export default Logout
