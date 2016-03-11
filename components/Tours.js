import React, { PropTypes, Component } from 'react'

export default class Tours extends Component {
  render() {
    return (
      <div className="tours-list">
        <h4>Tours</h4>
        <ul>
          {this.props.tours.map((tour, i) =>
            <li key={i}>{tour.name}</li>
          )}
        </ul>
      </div>
    )
  }
}

Tours.propTypes = {
  tours: PropTypes.array.isRequired
}
