import 'babel-polyfill'
/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import ReactDOM from 'react-dom'
import Relay from 'react-relay'
import auth from './lib/AuthService'
import NetworkLayer from './lib/NetworkLayer'

import routes from './routes'

require('offline-plugin/runtime').install()

const devBuild = process.env.NODE_ENV !== 'production'
const apiUrl = devBuild ? 'http://localhost:8123/api/queries' : 'http://simplegolftour.com/api/queries'

Relay.injectNetworkLayer(
  new NetworkLayer(apiUrl, {
    headers: {
      Authorization: `Token ${auth.getToken()}`
    }
  })
)

ReactDOM.render(routes, document.getElementById('root'))
