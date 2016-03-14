import React, { PropTypes } from 'react'
import Sidebar from '../components/Sidebar'
import '../styles/app.scss'
// const tour = user.tours.find(x => parseInt(x.id, 10) === tourId)

const SimpleGolftour = ({ userName, tours, children }) => (
  <div className="application">
    <Sidebar title={userName} tours={tours} />

    <section className="main">
      { children }
    </section>
  </div>
)

SimpleGolftour.propTypes = {
  userName: PropTypes.string.isRequired,
  tours: PropTypes.array.isRequired,
  children: PropTypes.object.isRequired
}

export default SimpleGolftour
