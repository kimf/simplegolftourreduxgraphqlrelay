import React from 'react'
import { shallow } from 'enzyme'
// import { shallow, render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import InlineLoading from '../components/InlineLoading'


describe('InlineLoading', () => {
  it('shows loading in the header', () => {
    expect(shallow(<InlineLoading />).contains(
      <header className="contentheader">… Loading …</header>
    )).to.equal(true)
  })

  // it('can run an expectation with render', () => {
  //   expect(render(<InlineLoading />).find('header').text()).to.contain('… Loading …')
  // })
})
