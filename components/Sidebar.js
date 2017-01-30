import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const logoSrc = require('../styles/images/logo.png')

const Sidebar = ({ title, tours, loggedIn }) => (
  <aside className="sidebar">
    <figure className="logo">
      <img src={logoSrc} alt="Logo" />
    </figure>

    <nav>
      <h4>{ title }</h4>

      <ul>
        <li>
          <Link to="/" activeClassName="active" onlyActiveOnIndex>
            Overview
          </Link>
        </li>
        <li>
          <Link to="/schedule" activeClassName="active">Schedule</Link>
        </li>
        <li>
          <Link to="/settings" activeClassName="active">Settings</Link>
        </li>
      </ul>
    </nav>

    <nav>
      <h4>Tours</h4>
      <ul>
        {tours.map(tour => (
          <li key={tour.id}>
            <Link to={`/tours/${tour.id}`} activeClassName="active">{tour.name}</Link>
          </li>
        ))}
      </ul>
    </nav>

    <div className="bottom">
      <ul>
        <li>
          {loggedIn ? (
            <Link to="/logout">Log out</Link>
          ) : (
            <Link to="/login">Sign in</Link>
          )}
        </li>
      </ul>
    </div>
  </aside>
)

Sidebar.propTypes = {
  title: PropTypes.string.isRequired,
  tours: PropTypes.arrayOf(PropTypes.object).isRequired,
  loggedIn: PropTypes.bool.isRequired
}

export default Sidebar
