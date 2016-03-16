import React from 'react'
import { IndexRoute, Route } from 'react-router'

import UserQueries from './queries/UserQueries'
import TourQueries from './queries/TourQueries'

import Loading from './components/Loading'
import InlineLoading from './components/InlineLoading'

import SimpleGolftourLayout from './layouts/SimpleGolftour'
import UserContainer from './containers/User'
import TourContainer from './containers/Tour'

export default (
  <Route path="/" component={SimpleGolftourLayout} queries={UserQueries} renderLoading={Loading}>
    <IndexRoute component={UserContainer} queries={UserQueries} />
    <Route
      path="/tours/:tourId"
      component={TourContainer}
      queries={TourQueries}
      renderLoading={InlineLoading}
    />
  </Route>
)
