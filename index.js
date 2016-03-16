import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import { IndexRoute, Router, Route, browserHistory } from 'react-router'

const rootEl = document.getElementById('root')

// /schedule
// /tours/:id
// /settings
import App from './containers/App'
import User from './containers/User'
import Tour from './containers/Tour'

let render = () => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={App}>
         <IndexRoute component={User} />
         <Route path="/tours/:id" component={Tour} />
       </Route>
      <App />
    </Router>,
    rootEl
  )
}

if (module.hot) {
  // Support hot reloading of components
  // and display an overlay for runtime errors
  const renderApp = render
  const renderError = (error) => {
    const RedBox = require('redbox-react')
    ReactDOM.render(
      <RedBox error={error} />,
      rootEl
    )
  }
  render = () => {
    try {
      renderApp()
    } catch (error) {
      renderError(error)
    }
  }
  module.hot.accept('./containers/App', () => {
    setTimeout(render)
  })
}

render()
