import React, { PropTypes } from 'react'
import Relay from 'react-relay'
import Sidebar from '../components/Sidebar'
import '../styles/app.scss'
// const tour = user.tours.find(x => parseInt(x.id, 10) === tourId)

const SimpleGolftour = ({ user, children }) => (
  <div className="application">
    <Sidebar title={user.name} tours={user.tours} />

    <section className="main">
      { children }
    </section>
  </div>
)

SimpleGolftour.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    tours: PropTypes.array.isRequired
  }).isRequired,
  children: PropTypes.object.isRequired
}

const SimpleGolftourLayout = Relay.createContainer(SimpleGolftour, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        id,
        name,
        tours {
          id,
          name
        }
      }
    `
  }
})

export default SimpleGolftourLayout
