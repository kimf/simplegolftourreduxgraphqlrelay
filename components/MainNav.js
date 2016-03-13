import React, { PropTypes } from 'react'

const MainNav = ({ title, activeSection, changeSection }) => (
  <nav>
    <h4>{ title }</h4>

    <ul>
      <li className={activeSection === 'overview' ? 'active' : ''}>
        <a href="#" onClick={changeSection.bind(null, 'overview', null)}>Overview</a>
      </li>
      <li className={activeSection === 'schedule' ? 'active' : ''}>
        <a href="#" onClick={changeSection.bind(null, 'schedule', null)}>Schedule</a>
      </li>
      <li className={activeSection === 'settings' ? 'active' : ''}>
        <a href="#" onClick={changeSection.bind(null, 'settings', null)}>Settings</a>
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
