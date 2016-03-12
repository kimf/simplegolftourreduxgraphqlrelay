import React, { PropTypes } from 'react'

const Tours = ({ tours }) => (
  <nav>
    <h4>Tours</h4>
    <ul>
      {tours.map((tour, i) =>
        <li key={i}>
          <a href="/tours/x">{tour.name}</a>
        </li>
      )}
    </ul>
  </nav>
)

Tours.propTypes = {
  tours: PropTypes.array.isRequired
}

export default Tours
