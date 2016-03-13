import React, { PropTypes } from 'react'

const TourNav = ({ tours, tourId, changeTour }) => (
  <nav>
    <h4>Tours</h4>
    <ul>
      {tours.map((tour, i) =>
        <li key={i} className={tourId === parseInt(tour.id, 10) ? 'active' : ''}>
          <a href="#" onClick={changeTour.bind(null, 'tour', tour.id)}>
            {tour.name}
          </a>
        </li>
      )}
    </ul>
  </nav>
)

TourNav.propTypes = {
  tours: PropTypes.array.isRequired,
  tourId: PropTypes.number,
  changeTour: PropTypes.func.isRequired
}

export default TourNav
