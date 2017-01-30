import React, { Component, PropTypes } from 'react'
import Relay from 'react-relay'
import auth from '../lib/AuthService'
import NetworkLayer from '../lib/NetworkLayer'

require('es6-promise').polyfill()

const devBuild = process.env.NODE_ENV !== 'production'
const apiUrl = devBuild
               ? 'http://localhost:8123/api/queries'
               : 'http://home.fransman.se:8123/api/queries'

const logoSrc = require('../styles/images/logo.png')

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { error: false, email: '', password: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    const { value, name } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(e) {
    e.preventDefault()

    const { email, pass } = this.state

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

      return true
    })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="application login">
        <section className="main">
          <figure className="logo">
            <img src={logoSrc} alt="Logo" />
          </figure>

          <form onSubmit={this.handleSubmit}>
            {this.state.error && (
              <p className="error">Bad login information</p>
            )}
            <label htmlFor="email">
              Email
              <input
                value={email}
                name="email"
                placeholder="email@domain.com"
                onChange={this.handleChange}
              />
            </label>
            <label htmlFor="password">
              Password
              <input
                value={password}
                name="password"
                type="password"
                placeholder="minimum 3 characters"
                onChange={this.handleChange}
              />
            </label>
            <button type="submit">Login</button>
          </form>
        </section>
      </div>
    )
  }
}

Login.defaultProps = { location: '' }

Login.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      nextPathname: PropTypes.string
    })
  })
}

Login.contextTypes = { router: PropTypes.object.isRequired }

export default Login
