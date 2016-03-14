import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

const Tour = ({ tour, currentSeason }) => (
  <div>
    <header className="contentheader">
      <h2>{tour.name.toUpperCase()}</h2>
      <ul>
        {tour.seasons.map(season =>
          <li key={season.id}>
            <Link to={`/tours/${tour.id}/seasons/${season.id}`} activeClassName="active">
              {season.id}
            </Link>
          </li>
        )}
      </ul>
    </header>
    <section className="content">
        <h3>Leaderboard</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Events</th>
              <th>Average</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {currentSeason.leaderboard.map(user =>
              <tr key={user.id}>
                <td>{user.position}</td>
                <td>{user.name}</td>
                <td>{user.num_events}</td>
                <td>{user.average}</td>
                <td>{user.total_points}</td>
              </tr>
            )}
          </tbody>
        </table>
        <h3>Events</h3>
          <ul>
            {currentSeason.events.map(event =>
              <li key={event.id}>
                {event.course}
                {event.gametype}
                {event.starts_at}
              </li>
            )}
          </ul>
    </section>
  </div>
)

Tour.propTypes = {
  tour: PropTypes.shape({
    name: PropTypes.string.isRequired,
    seasons: PropTypes.array
  }),
  currentSeason: PropTypes.object.isRequired
}

function mapStateToProps(state, ownProps) {
  const tourId = parseInt(ownProps.params.id, 10)
  const tours = state.userReducer.get('user').get('tours')
  const tour = tours.find(x => parseInt(x.id, 10) === tourId)

  const currentSeason = tour.current_season

  return { tour, currentSeason }
}

export default connect(mapStateToProps)(Tour)
