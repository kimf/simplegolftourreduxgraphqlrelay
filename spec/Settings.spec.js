import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import Settings from '../components/Settings'

const currentUser = { name: 'Kim Fransman', email: 'kim@fransman.se' }


describe('Settings', () => {
  it('shows the header', () => {
    expect(render(<Settings currentUser={currentUser} />).find('header').text()).to.contain(
      'SETTINGS FOR KIM FRANSMAN'
    )
  })
})
