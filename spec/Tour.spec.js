import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import { Tour } from '../containers/Tour'

const seasons = []

const leaderboard = [
  { position: 1, name: 'Kim Fransman', num_events: 3, average: 17.5, total_points: 200 }
]

const events = [
  { course: 'Skövde GK', starts_at: 'Tomorrow', scoring_type: 'Points' }
]

const currentSeason = {
  id: 100,
  leaderboard,
  events
}

const tour = {
  id: '1',
  name: 'Tisdagsgolfen',
  seasons,
  currentSeason
}

const wrapper = shallow(
  <Tour tour={tour} />
)

describe('Tour', () => {
  it('renders the header', () => {
    expect(wrapper.find('header').text()).to.contain(
      'TISDAGSGOLFEN'
    )
  })

  it('renders the leaderboard', () => {
    expect(wrapper.find('table').text()).to.contain(
      '1Kim Fransman317.5200'
    )
  })

  it('renders the events', () => {
    expect(wrapper.find('li').text()).to.contain(
      'Skövde GKScrambleTomorrowPoints'
    )
  })
})
