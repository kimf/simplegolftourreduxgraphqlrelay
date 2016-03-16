import React, { PropTypes } from 'react'
import Relay from 'react-relay'

const User = ({ user }) => (
  <div>
    <header className="contentheader">
      <h2>OVERVIEW FOR {user.name.toUpperCase()}</h2>
    </header>
    <section className="content">
      loremLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
      quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
      cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
      proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </section>
  </div>
)

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  })
}

const UserContainer = Relay.createContainer(User, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        name
      }
    `
  }
})


export default UserContainer
