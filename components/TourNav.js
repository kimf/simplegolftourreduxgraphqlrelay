import React, { PropTypes } from 'react'

const TourNav = ({ tours, changeTour }) => (
  <nav>
    <h4>Tours</h4>
    <ul>
      {tours.map((tour, i) =>
        <li key={i} onClick={(e) => changeTour.bind(e, tour)}>
          <a href={false}>{tour.name}</a>
        </li>
      )}
    </ul>
  </nav>
)

TourNav.propTypes = {
  tours: PropTypes.array.isRequired,
  changeTour: PropTypes.func.isRequired
}

export default TourNav
