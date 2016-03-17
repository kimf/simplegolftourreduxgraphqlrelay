import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import { SimpleGolftour } from '../layouts/SimpleGolftour'

const currentUser = { name: 'Kim Fransman', email: 'kim@fransman.se', tours: [] }

const wrapper = shallow(
  <SimpleGolftour currentUser={currentUser}>
    <div></div>
  </SimpleGolftour>
)

describe('SimpleGolftour', () => {
  it('renders the sidebar', () => {
    expect(wrapper.find('Sidebar')).to.have.length(1)
  })
})
