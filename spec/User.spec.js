import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import User from '../components/User'

const currentUser = { name: 'Kim Fransman', email: 'kim@fransman.se' }


describe('User', () => {
  it('shows the header', () => {
    expect(render(<User currentUser={currentUser} />).find('header').text()).to.contain(
      'OVERVIEW FOR KIM FRANSMAN'
    )
  })
})
