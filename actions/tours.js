import fetch from 'isomorphic-fetch'

export const REQUEST_TOUR_DATA = 'REQUEST_TOUR_DATA'
export const RECEIVE_TOUR_DATA = 'RECEIVE_TOUR_DATA'

function requestTour() {
  return {
    type: REQUEST_TOUR_DATA
  }
}

function receiveTour(json) {
  return {
    type: RECEIVE_TOUR_DATA,
    tour: json.data.tour,
    receivedAt: Date.now()
  }
}

function fetchTour(tourId) {
  const graphQLParams = {
    query: `{
      tour(id: ${tourId}) {
        id,
      	name,
        custom_domain,
        use_custom_domain,
        creator_id,
        seasons {
          id
        },
        current_season {
          id,
          aggregate_count,
          points_ladder,
          use_reversed_points,
          leaderboard {
            id,
            average,
            name,
            num_events,
            old_average,
            old_total_points,
            points_array,
            position,
            prev_position,
            total_points
          },
          events {
            id,
            scoring_type,
            status,
            starts_at,
            course,
            gametype,
            team_event,
            updated_at,
            created_at
          }
        },
        memberships {
          id,
          nickname,
          role,
          user {
            id
          }
        }
      }
    }`
  }
  return dispatch => {
    dispatch(requestTour())
    return fetch('http://localhost:3000/queries', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(graphQLParams)
    })
      .then(response => response.json())
      .then(json => dispatch(receiveTour(json)))
  }
}

function shouldFetchTour(state) {
  const { tourReducer } = state
  if (tourReducer.get('tour').isEmpty()) {
    return true
  }
  if (tourReducer.get('isFetching')) {
    return false
  }
  return true
}

export function fetchTourIfNeeded(tourId) {
  return (dispatch, getState) => {
    if (shouldFetchTour(getState())) {
      return dispatch(fetchTour(tourId))
    }
    return null
  }
}
