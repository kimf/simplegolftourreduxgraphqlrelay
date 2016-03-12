import React, { PropTypes } from 'react'
import User from './User'
import Sidebar from './Sidebar'

const setCurrentSectionComponent = (route, user) => {
  switch (route) {
    case 'schedule':
      return (<div><h1>Schedule</h1></div>)
    case 'settings':
      return (<div><h1>Settings</h1></div>)
    default:
      return <User user={user} />
  }
}

const SimpleGolftour = ({ user, currentSection, changeSection }) => {
  const currentSectionComponent = setCurrentSectionComponent(currentSection, user)

  return (
    <div className="application">
      <Sidebar
        title={user.name}
        tours={user.tours}
        activeSection={currentSection}
        changeSection={changeSection}
      />

      <section className="main">
        { currentSectionComponent }
      </section>
    </div>
  )
}

SimpleGolftour.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    tours: PropTypes.array.isRequired
  }),
  currentSection: PropTypes.string.isRequired,
  changeSection: PropTypes.func.isRequired
}

export default SimpleGolftour
