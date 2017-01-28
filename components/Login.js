import React, { PropTypes } from 'react'
import Relay from 'react-relay'
import auth from '../lib/AuthService'
import NetworkLayer from '../lib/NetworkLayer'

require('es6-promise').polyfill()

const devBuild = process.env.NODE_ENV !== 'production'
const apiUrl = devBuild ? 'http://localhost:8123/queries' : 'http://home.fransman.se:8123/queries'

const logoSrc = require('../styles/images/logo.png')

const Login = React.createClass({
  propTypes: {
    location: PropTypes.any,
    error: PropTypes.bool
  },

  contextTypes: {
    router: PropTypes.object.isRequired
  },

  getInitialState() {
    return { error: false }
  },

  handleSubmit(e) {
    e.preventDefault()

    const email = this.refs.email.value
    const pass = this.refs.pass.value

    auth.login(email, pass, (loggedIn) => {
      if (!loggedIn) {
        return this.setState({ error: true })
      }

      Relay.injectNetworkLayer(
        new NetworkLayer(apiUrl, {
          headers: {
            Authorization: `Token ${auth.getToken()}`
          }
        })
      )

      const { location } = this.props

      if (location.state && location.state.nextPathname) {
        this.context.router.replace(location.state.nextPathname)
      } else {
        this.context.router.replace('/')
      }
    })
  },

  render() {
    return (
      <div className="application login">
        <section className="main">
          <figure className="logo">
            <img src={logoSrc} alt="Logo Image" />
          </figure>

          <form onSubmit={this.handleSubmit}>
            {this.state.error && (
              <p className="error">Bad login information</p>
            )}
            <label>
              Email
              <input ref="email" name="email" placeholder="email@domain.com" />
            </label>
            <label>
              Password
              <input ref="pass" name="password" placeholder="minimum 3 characters" />
            </label>
            <button type="submit">Login</button>
          </form>
        </section>
      </div>
    )
  }
})

export default Login
