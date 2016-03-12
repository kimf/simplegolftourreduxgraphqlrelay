import React, { PropTypes } from 'react'

const MainNav = ({ title, activeSection, changeSection }) => (
  <nav>
    <h4>{ title }</h4>

    <ul>
      <li className={activeSection === 'overview' ? 'active' : ''}>
        <a href="#" onClick={changeSection.bind(null, 'overview')}>Overview</a>
      </li>
      <li className={activeSection === 'schedule' ? 'active' : ''}>
        <a href="#" onClick={changeSection.bind(null, 'schedule')}>Schedule</a>
      </li>
      <li className={activeSection === 'settings' ? 'active' : ''}>
        <a href="#" onClick={changeSection.bind(null, 'settings')}>Settings</a>
      </li>
    </ul>
  </nav>
)

MainNav.propTypes = {
  title: PropTypes.string.isRequired,
  activeSection: PropTypes.string.isRequired,
  changeSection: PropTypes.func.isRequired
}

export default MainNav
