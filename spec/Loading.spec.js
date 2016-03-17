import React from 'react'
import { shallow } from 'enzyme'
// import { shallow, render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import Loading from '../components/Loading'

describe('Loading', () => {
  it('renders the overlay wrapper', () => {
    expect(shallow(<Loading />).find('.overlay')).to.have.length(1)
  })

  it('renders the progress wrapper', () => {
    expect(shallow(<Loading />).find('.progress')).to.have.length(1)
  })

  it('renders the bar with 0 width', () => {
    const wrapper = shallow(<Loading />)
    expect(wrapper.contains(<div className="bar" style={ { width: '0px' } }></div>)).to.equal(true)
  })
})
