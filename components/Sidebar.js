import React, { PropTypes } from 'react'
import MainNav from './MainNav'
import TourNav from './TourNav'
const logoSrc = require('../styles/images/logo.png')

const Sidebar = ({ title, tours, activeSection, changeSection }) => (
  <aside className="sidebar">
    <figure className="logo">
      <img src={logoSrc} alt="Logo Image" />
    </figure>

    <MainNav activeSection={activeSection} title={title} changeSection={changeSection} />

    <TourNav tours={tours} changeTour={changeSection} />

    <div className="bottom">
      <ul>
        <li><a href="/">Logout</a></li>
      </ul>
    </div>
  </aside>
)

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  tours: PropTypes.array.isRequired,
  activeSection: PropTypes.string.isRequired,
  changeSection: PropTypes.func.isRequired
}

export default Sidebar
