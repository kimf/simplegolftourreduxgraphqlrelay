import React, { Component, PropTypes } from 'react'
import Relay from 'react-relay'
import Sidebar from '../components/Sidebar'
import auth from '../lib/AuthService'

import '../styles/app.scss'

class SimpleGolftour extends Component {
  constructor(props) {
    super(props)

    this.state = { loggedIn: auth.loggedIn() }
    this.updateAuth = this.updateAuth.bind(this)
  }

  componentWillMount() {
    auth.onChange = this.updateAuth
    auth.login()
  }

  updateAuth(loggedIn) {
    this.setState({ loggedIn })
  }

  render() {
    const { currentUser, children } = this.props
    const { loggedIn } = this.state

    return (
      <div className="application">
        <Sidebar title={currentUser.name} tours={currentUser.tours} loggedIn={loggedIn} />

        <section className="main">
          {
            React.cloneElement(children, { currentUser })
            ||
            <p>You are {!loggedIn && 'not'} logged in.</p>
          }
        </section>
      </div>
    )
  }
}

SimpleGolftour.defaultProps = {
  children: false
}

SimpleGolftour.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tours: PropTypes.array.isRequired
  }).isRequired,
  children: PropTypes.element
}

const SimpleGolftourLayout = Relay.createContainer(SimpleGolftour, {
  fragments: {
    currentUser: () => Relay.QL`
      fragment on User {
        id,
        name,
        email,
        tours {
          id,
          name
        }
      }
    `
  }
})

export default SimpleGolftourLayout
