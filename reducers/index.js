import { Map as map } from 'immutable'
import { combineReducers } from 'redux'
import {
  REQUEST_USER_DATA,
  RECEIVE_USER_DATA,
  SET_CURRENT_SECTION,
  SET_CURRENT_SEASON
} from '../actions'

const immutableState = map({
  isFetching: false,
  user: map({}),
  currentSection: 'overview'
})

function userReducer(state = immutableState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA:
      return state.set('isFetching', true)
    case RECEIVE_USER_DATA:
      return state.set('isFetching', false)
                  .set('user', map(action.user))
    default:
      return state
  }
}

const sectionState = map({
  section: 'overview',
  seasonId: null,
  tourId: null
})

function sectionReducer(state = sectionState, action) {
  switch (action.type) {
    case SET_CURRENT_SECTION:
      return state.set('section', action.section)
                  .set('tourId', parseInt(action.tourId, 10))
    case SET_CURRENT_SEASON:
      return state.set('seasonId', parseInt(action.seasonId, 10))
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userReducer,
  sectionReducer
})

export default rootReducer
