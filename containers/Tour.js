import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

class Tour extends Component {
  render() {
    const { tour } = this.props
    return (
      <div>
        <header className="contentheader">
          <h2>{tour.name.toUpperCase()}</h2>
          <ul>
            {tour.seasons.map((season, i) =>
              <li key={season.id}>
                <Link to={`/tours/${tour.id}/seasons/${season.id}`} activeClassName="active">
                  {season.id}
                </Link>
              </li>
            )}
          </ul>
        </header>
        <section className="content">
        </section>
      </div>
    )
  }
}

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    seasons: PropTypes.array
  })
}

function mapStateToProps(state, ownProps) {
  const tourId = parseInt(ownProps.params.id, 10)
  const tours = state.userReducer.get('user').get('tours')
  const tour = tours.find(x => parseInt(x.id, 10) === tourId)

  return { tour }
}

export default connect(mapStateToProps)(Tour)
