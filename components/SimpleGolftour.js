import React, { PropTypes } from 'react'
import User from './User'
import Sidebar from './Sidebar'
import Tour from './Tour'

const setCurrentSectionComponent = (route, user, tourId, changeSeason, activeSeason) => {
  switch (route) {
    case 'schedule':
      return (<div><h1>Schedule</h1></div>)
    case 'settings':
      return (<div><h1>Settings</h1></div>)
    case 'tour': {
      const tour = user.tours.find(x => parseInt(x.id, 10) === tourId)
      return (
        <Tour
          name={tour.name}
          seasons={tour.seasons}
          activeSeason={activeSeason}
          changeSeason={changeSeason}
        />
      )
    }
    default:
      return <User user={user} />
  }
}

const SimpleGolftour = ({ user, currentSection, changeSection, tourId, changeSeason, activeSeason }) => {
  const currentSectionComponent = setCurrentSectionComponent(currentSection, user, tourId, changeSeason, activeSeason)
  return (
    <div className="application">
      <Sidebar
        title={user.name}
        tours={user.tours}
        activeSection={currentSection}
        changeSection={changeSection}
        tourId={tourId}
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
  changeSection: PropTypes.func.isRequired,
  tourId: PropTypes.number,
  changeSeason: PropTypes.func.isRequired,
  activeSeason: PropTypes.number
}

export default SimpleGolftour
