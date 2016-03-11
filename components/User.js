import React, { PropTypes, Component } from 'react'

export default class User extends Component {
  render() {
    const { user } = this.props

    return (
      <div>
        <header className='contentheader'>
          <h2>OVERVIEW FOR {user.name.toUpperCase()}</h2>
        </header>
        <section className='content'>
          loremLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
          cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </section>
      </div>
    )
  }
}

User.propTypes = {
  user: React.PropTypes.shape({
    name: React.PropTypes.string,
    email: React.PropTypes.string
  })
}
