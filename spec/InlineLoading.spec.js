import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import InlineLoading from '../components/InlineLoading'


describe('InlineLoading', () => {
  it('can run an expectation with render', () => {
    expect(render(<InlineLoading />).find('header').text()).to.contain('… Loading …')
  })
})
