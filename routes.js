import React from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import UserQueries from './queries/UserQueries'
import TourQueries from './queries/TourQueries'

import Loading from './components/Loading'
import InlineLoading from './components/InlineLoading'

import SimpleGolftourLayout from './layouts/SimpleGolftour'
import TourContainer from './containers/Tour'

import User from './components/User'
import Schedule from './components/Schedule'
import Settings from './components/Settings'
import Login from './components/Login'
import Logout from './components/Logout'

import auth from './lib/AuthService'

const requireAuth = (nextState, replace) => {
  if (!auth.loggedIn()) {
    replace({
      pathname: '/login',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

export default (
  <Router>
    <Route path="/"
      component={SimpleGolftourLayout}
      queries={UserQueries}
      renderLoading={Loading}
      onEnter={requireAuth}
    >
      <IndexRoute component={User} />
      <Route path="/schedule" component={Schedule} />
      <Route path="/settings" component={Settings} />

      <Route
        path="/tours/:tourId"
        component={TourContainer}
        queries={TourQueries}
        renderLoading={InlineLoading}
      />
    </Route>
    <Route path="login" component={Login} />
    <Route path="logout" component={Logout} />
  </Router>
)
