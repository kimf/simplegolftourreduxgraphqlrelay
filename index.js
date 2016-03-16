import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Relay from 'react-relay'
import { RelayRouter } from 'react-router-relay'
import { browserHistory } from 'react-router'

import routes from './routes'

const rootEl = document.getElementById('root')

const devBuild = process.env.NODE_ENV !== 'production'
const apiUrl = devBuild ? 'http://localhost:3000/queries' : '/queries'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer(apiUrl)
)

let render = () => {
  ReactDOM.render(
    <RelayRouter history={browserHistory} routes={routes} />,
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
  module.hot.accept('./layouts/SimpleGolftour', () => { setTimeout(render) })
  module.hot.accept('./containers/Tour', () => { setTimeout(render) })
  module.hot.accept('./containers/User', () => { setTimeout(render) })
}

render()
