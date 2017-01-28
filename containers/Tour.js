
import React, { PropTypes } from 'react'
import Relay from 'react-relay'
import { Link } from 'react-router'

export const Tour = ({ tour }) => (
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
            {tour.currentSeason.leaderboard.map(user =>
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
            {tour.currentSeason.events.map(event =>
              <li key={event.id}>
                {event.course}
                {event.starts_at}
                {event.scoring_type}
                Team event? {event.team_event}
              </li>
            )}
          </ul>
    </section>
  </div>
)

Tour.propTypes = {
  tour: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    seasons: PropTypes.array,
    currentSeason: PropTypes.shape({
      id: PropTypes.string,
      leaderboard: PropTypes.array,
      events: PropTypes.array
    })
  })
}

const TourContainer = Relay.createContainer(Tour, {
  fragments: {
    tour: () => Relay.QL`
      fragment on Tour {
        id,
        name,
        seasons {
          id
        }
        currentSeason {
          id
          aggregate_count
          points_ladder
          use_reversed_points
          closed_at
          created_at
          updated_at,
          leaderboard {
            id,
            position,
            name,
            num_events,
            average,
            total_points
          }
          events {
            id,
            starts_at,
            scoring_type,
            team_event,
            status,
            course,
            created_at,
            updated_at,
          }
        }
      }
    `
  }
})


export default TourContainer
