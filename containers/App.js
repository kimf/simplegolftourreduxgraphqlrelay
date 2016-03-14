import React, { Component, PropTypes } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import { connect } from 'react-redux'

import { fetchUserIfNeeded } from '../actions'
import SimpleGolftour from '../layouts/SimpleGolftour'
import Loading from '../components/Loading'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(fetchUserIfNeeded(135563))
  }

  renderLoading(isEmpty) {
    let loading = ''
    if (isEmpty) {
      loading = <Loading key="loading-component" />
    }
    return (
      <ReactCSSTransitionGroup
        transitionName="loading"
        transitionEnterTimeout={350}
        transitionLeaveTimeout={2000}
      >
        {loading}
      </ReactCSSTransitionGroup>
    )
  }

  renderContainer(isEmpty, user, children) {
    let container = ''
    if (!isEmpty) {
      container = (
        <SimpleGolftour
          userName={user.name}
          tours={user.tours}
          children={children}
        />
      )
    }
    return container
  }

  render() {
    const { user, children } = this.props
    const isEmpty = Object.keys(user).length === 0
    return (
      <div>
        {this.renderLoading(isEmpty)}
        {this.renderContainer(isEmpty, user, children)}
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { userReducer } = state
  const isFetching = userReducer.get('isFetching')
  const user = userReducer.get('user').toJS()

  return {
    isFetching,
    user
  }
}

export default connect(mapStateToProps)(App)
