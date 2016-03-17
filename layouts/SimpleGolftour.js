import React, { PropTypes } from 'react'
import Relay from 'react-relay'
import Sidebar from '../components/Sidebar'
import '../styles/app.scss'
// const tour = user.tours.find(x => parseInt(x.id, 10) === tourId)

export const SimpleGolftour = ({ currentUser, children }) => (
  <div className="application">
    <Sidebar title={currentUser.name} tours={currentUser.tours} />

    <section className="main">
      {React.cloneElement(children, { currentUser })}
    </section>
  </div>
)

SimpleGolftour.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tours: PropTypes.array.isRequired
  }).isRequired,
  children: PropTypes.object.isRequired
}

const SimpleGolftourLayout = Relay.createContainer(SimpleGolftour, {
  fragments: {
    currentUser: () => Relay.QL`
      fragment on User {
        id,
        name,
        email,
        tours {
          id,
          name
        }
      }
    `
  }
})

export default SimpleGolftourLayout
