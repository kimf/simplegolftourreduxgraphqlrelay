import Immutable from "immutable";
import { combineReducers } from 'redux'
import {
  REQUEST_USER_DATA, RECEIVE_USER_DATA
} from '../actions'


const immutableState = Immutable.Map({
  isFetching: false,
  user: Immutable.Map({})
})

function userReducer(state = immutableState, action) {
  switch (action.type) {
    case REQUEST_USER_DATA:
      return state.set("isFetching", true)
    case RECEIVE_USER_DATA:
      return state.set("isFetching", false)
                  .set("user", Immutable.Map(action.user))
    default:
      return state
  }
}

export default userReducer
