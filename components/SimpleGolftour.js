import React, { PropTypes, Component } from 'react'
import Tours from './Tours'
import User from './User'

export default class SimpleGolftour extends Component {
  render() {
    const { user } = this.props

    const currentSection = <User user={user} />

    return (
      <div className='application'>
        <aside className='sidebar'>
          <figure className='logo'>
            <img src='/images/logo.png' alt='Logo Image' />
          </figure>

          <nav>
            <h4>{user.name}</h4>
            <ul>
              <li><a href='#'>Overview</a></li>
              <li><a href='#'>Schedule</a></li>
              <li><a href='#'>Settings</a></li>
            </ul>
          </nav>

          <nav>
            <Tours tours={user.tours} />
          </nav>

          <div className='bottom'>
            <ul>
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
        </aside>

        <section className='main'>
          {currentSection}
        </section>
      </div>
    )
  }
}

SimpleGolftour.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    tours: PropTypes.array
  })
}
