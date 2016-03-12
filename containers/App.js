import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchUserIfNeeded, setCurrentSection } from '../actions'
import SimpleGolftour from '../components/SimpleGolftour'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Loading from '../components/Loading'

import '../styles/app.scss'

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchUserIfNeeded(135563))
  }

  changeSection(section) {
    const { dispatch } = this.props
    dispatch(setCurrentSection(section))
  }

  // changeTour(e, tourId) {
  //   //this.props.dispatch(setCurrentTour(tourId))
  // }

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
    const { user, currentSection } = this.props
    const isEmpty = Object.keys(user).length === 0
    return (
      <div>
        {this.renderLoading(isEmpty)}
        {
          isEmpty
            ? (<div></div>)
            : <SimpleGolftour user={user} currentSection={currentSection} changeSection={this.changeSection.bind(this)} />
        }
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  currentSection: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { userReducer, sectionReducer } = state
  const isFetching = userReducer.get('isFetching')
  const user = userReducer.get('user').toJS()
  const currentSection = sectionReducer
  return {
    isFetching,
    user,
    currentSection
  }
}

export default connect(mapStateToProps)(App)
