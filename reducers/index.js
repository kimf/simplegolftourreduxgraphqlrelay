import { Map as map } from 'immutable'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {
  REQUEST_USER_DATA,
  RECEIVE_USER_DATA
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

const rootReducer = combineReducers({
  userReducer,
  routing: routerReducer
})

export default rootReducer
