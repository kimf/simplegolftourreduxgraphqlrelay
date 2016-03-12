import React, { PropTypes } from 'react'

const MainNav = ({ title, activeSection }) => (
  <nav>
    <h4>{ title }</h4>

    <ul>
      <li className={activeSection === 'overview' ? 'active' : ''}>
        <a href="#">Overview</a>
      </li>
      <li className={activeSection === 'schedule' ? 'active' : ''}>
        <a href="#">Schedule</a>
      </li>
      <li className={activeSection === 'settings' ? 'active' : ''}>
        <a href="#">Settings</a>
      </li>
    </ul>
  </nav>
)

MainNav.propTypes = {
  title: PropTypes.string,
  activeSection: PropTypes.string
}

export default MainNav
