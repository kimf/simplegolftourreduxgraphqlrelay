import React, { PropTypes } from 'react'

const Tours = ({ tours }) => (
  <div className="tours-list">
    <h4>Tours</h4>
    <ul>
      {tours.map((tour, i) =>
        <li key={i}>{tour.name}</li>
      )}
    </ul>
  </div>
)

Tours.propTypes = {
  tours: PropTypes.array.isRequired
}

export default Tours
