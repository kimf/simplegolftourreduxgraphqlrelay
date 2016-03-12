import { Map as map } from 'immutable'
import { combineReducers } from 'redux'
import {
  REQUEST_USER_DATA,
  RECEIVE_USER_DATA,
  SET_CURRENT_SECTION
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

function sectionReducer(state = 'overview', action) {
  switch (action.type) {
    case SET_CURRENT_SECTION:
      return action.section
    default:
      return state
  }
}

const rootReducer = combineReducers({
  userReducer,
  sectionReducer
})

export default rootReducer
