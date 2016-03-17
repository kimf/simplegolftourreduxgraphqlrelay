import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import Schedule from '../components/Schedule'

const currentUser = { name: 'Kim Fransman', email: 'kim@fransman.se' }


describe('Schedule', () => {
  it('shows the header', () => {
    expect(render(<Schedule currentUser={currentUser} />).find('header').text()).to.contain(
      'SCHEDULE FOR KIM FRANSMAN'
    )
  })
})
