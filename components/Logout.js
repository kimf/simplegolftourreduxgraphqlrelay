import React, { PropTypes } from 'react'
import auth from '../lib/AuthService'

const Logout = React.createClass({
  contextTypes: {
    router: PropTypes.object.isRequired
  },

  componentDidMount() {
    auth.logout()
    this.context.router.replace('/')
  },

  render() {
    return <p>You are now logged out</p>
  }
})

export default Logout
