import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'

const stateTransformer = (state) => (
  {
    user: state.userReducer.toJS(),
    section: state.sectionReducer.toJS()
  }
)

export default function configureStore(initialState) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(
        thunkMiddleware,
        createLogger({
          collapsed: true,
          stateTransformer
        })
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextRootReducer = require('../reducers').default
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
