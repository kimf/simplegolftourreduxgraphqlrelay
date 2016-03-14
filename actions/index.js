import fetch from 'isomorphic-fetch'

export const REQUEST_USER_DATA = 'REQUEST_USER_DATA'
export const RECEIVE_USER_DATA = 'RECEIVE_USER_DATA'

function requestUser() {
  return {
    type: REQUEST_USER_DATA
  }
}

function receiveUser(json) {
  return {
    type: RECEIVE_USER_DATA,
    user: json.data.user,
    receivedAt: Date.now()
  }
}

function fetchUser(userId) {
  const graphQLParams = {
    query: `{ user(id: ${userId}) { id name email tours { id name custom_domain use_custom_domain seasons { id aggregate_count points_ladder use_reversed_points closed_at created_at updated_at, events { id, starts_at, scoring_type, team_event, status, gametype, course, created_at, updated_at, } } memberships { id nickname role user { id }}}}}`
  }
  return dispatch => {
    dispatch(requestUser())
    return fetch('http://localhost:3000/queries', {
      method: 'post',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(graphQLParams)
    })
      .then(response => response.json())
      .then(json => dispatch(receiveUser(json)))
  }
}

function shouldFetchUser(state) {
  const { userReducer } = state
  if (userReducer.get('user').isEmpty()) {
    return true
  }
  if (userReducer.get('isFetching')) {
    return false
  }
  return true
}

export function fetchUserIfNeeded(userId) {
  return (dispatch, getState) => {
    if (shouldFetchUser(getState())) {
      return dispatch(fetchUser(userId))
    }
    return null
  }
}
