import React, { PropTypes, Component } from 'react'
import { Link } from 'react-router'
import InlineLoading from '../components/InlineLoading'

class Tour extends Component {
  renderLoading(isFetching, isEmpty) {
    let loading = ''
    if (isFetching || isEmpty) {
      loading = <InlineLoading key="inline-loading-component" />
    }
    return (
      <div>{loading}</div>
    )
  }

  renderTour(isFetching, isEmpty, tour, currentSeason) {
    let container = ''
    if (!isFetching && !isEmpty) {
      container = (
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
    }
    return container
  }

  render() {
    const { isFetching, tour, currentSeason } = this.props
    const isEmpty = Object.keys(tour).length === 0
    return (
      <div>
        {this.renderLoading(isFetching, isEmpty)}
        {this.renderTour(isFetching, isEmpty, tour, currentSeason)}
      </div>
    )
  }
}

Tour.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  tourId: PropTypes.number.isRequired,
  tour: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    seasons: PropTypes.array
  }),
  currentSeason: PropTypes.shape({
    id: PropTypes.string,
    leaderboard: PropTypes.array,
    events: PropTypes.array
  })
}

export default Tour
