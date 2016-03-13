import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import {
  fetchUserIfNeeded,
  setCurrentSection,
  setCurrentSeason
} from '../actions'
import SimpleGolftour from '../components/SimpleGolftour'

import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import Loading from '../components/Loading'

import '../styles/app.scss'

class App extends Component {
  constructor(props) {
    super(props)
    this.changeSection = this.changeSection.bind(this)
    this.changeSeason = this.changeSeason.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(fetchUserIfNeeded(135563))
  }

  changeSection(section, tourId) {
    this.props.dispatch(setCurrentSection(section, tourId))
  }

  changeSeason(seasonId) {
    this.props.dispatch(setCurrentSeason(seasonId))
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

  renderContainer(isEmpty, user, currentSection, tourId, activeSeason) {
    let container = ''
    if (!isEmpty) {
      container = (
        <SimpleGolftour
          user={user}
          currentSection={currentSection}
          tourId={tourId}
          changeSection={this.changeSection}
          changeSeason={this.changeSeason}
          activeSeason={activeSeason}
        />
      )
    }
    return container
  }

  render() {
    const { user, currentSection, tourId, activeSeason } = this.props
    const isEmpty = Object.keys(user).length === 0
    return (
      <div>
        {this.renderLoading(isEmpty)}
        {this.renderContainer(isEmpty, user, currentSection, tourId, activeSeason)}
      </div>
    )
  }
}

App.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  user: PropTypes.object.isRequired,
  currentSection: PropTypes.string.isRequired,
  tourId: PropTypes.number,
  dispatch: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  const { userReducer, sectionReducer } = state
  const isFetching = userReducer.get('isFetching')
  const user = userReducer.get('user').toJS()
  const currentSection = sectionReducer.get('section')
  const tourId = sectionReducer.get('tourId')
  const activeSeason = sectionReducer.get('seasonId')
  return {
    isFetching,
    user,
    currentSection,
    tourId,
    activeSeason
  }
}

export default connect(mapStateToProps)(App)
