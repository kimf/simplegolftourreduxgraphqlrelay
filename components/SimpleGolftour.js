import React, { PropTypes } from 'react'
import Tours from './Tours'
import User from './User'
import MainNav from './MainNav'

const SimpleGolftour = ({ user }) => {
  const activeSection = 'user'
  const currentSection = <User user={user} />
  const logoSrc = require('../images/logo.png')
  return (
    <div className="application">
      <aside className="sidebar">
        <figure className="logo">
          <img src={logoSrc} alt="Logo Image" />
        </figure>

        <MainNav activeSection={activeSection} title={user.name} />

        <Tours tours={user.tours} />

        <div className="bottom">
          <ul>
            <li><a href="/">Logout</a></li>
          </ul>
        </div>
      </aside>

      <section className="main">
        { currentSection }
      </section>
    </div>
  )
}

SimpleGolftour.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    tours: PropTypes.array
  })
}

export default SimpleGolftour
