import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchUserIfNeeded } from '../actions'
import SimpleGolftour from '../components/SimpleGolftour'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Loading from '../components/Loading'

import '../styles/app.scss'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUserIfNeeded(135563))
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

  render() {
    const { user } = this.props
    const isEmpty = Object.keys(user).length === 0
    return (
      <div>
        {this.renderLoading(isEmpty)}
        {isEmpty ? (<div></div>) : <SimpleGolftour user={user} />}
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const isFetching = state.get('isFetching')
  const user = state.get('user').toJS()
  return {
    isFetching,
    user
  }
}

export default connect(mapStateToProps)(App)
