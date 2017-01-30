import React, { PropTypes } from 'react'

const Schedule = ({ currentUser }) => (
  <div>
    <header className="contentheader">
      <h2>SCHEDULE FOR {currentUser.name.toUpperCase()}</h2>
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

Schedule.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }).isRequired
}

export default Schedule
