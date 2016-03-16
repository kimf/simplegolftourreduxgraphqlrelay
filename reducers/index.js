import { Map as map } from 'immutable'
import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import {
  REQUEST_USER_DATA,
  RECEIVE_USER_DATA
} from '../actions'

import {
  REQUEST_TOUR_DATA,
  RECEIVE_TOUR_DATA
} from '../actions/tours'

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

/* This should be broken into it's own file
   and then imported in reducers/index.js */
const tourState = map({
  isFetching: false,
  tour: map({})
})

function tourReducer(state = tourState, action) {
  switch (action.type) {
    case REQUEST_TOUR_DATA:
      return state.set('isFetching', true)
    case RECEIVE_TOUR_DATA:
      return state.set('isFetching', false)
                  .set('tour', map(action.tour))
    default:
      return state
  }
}


const rootReducer = combineReducers({
  userReducer,
  tourReducer,
  routing: routerReducer
})

export default rootReducer
