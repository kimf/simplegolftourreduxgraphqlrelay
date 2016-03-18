import React from 'react'
import { render } from 'enzyme'
import { expect } from 'chai'
import { describe, it } from 'mocha'

import Sidebar from '../components/Sidebar'


const title = 'Kim Fransman'
const tours = [
  { id: 1, name: 'Tisdagsgolfen' },
  { id: 2, name: 'En annan tour' }
]

const wrapper = render(<Sidebar title={title} tours={tours} loggedIn />)

describe('Sidebar', () => {
  it('shows the header', () => {
    expect(wrapper.find('nav h4').text()).to.contain(
      title
    )
  })

  it('links to the tours', () => {
    tours.map(tour => (
      expect(wrapper.find('ul li a').text()).to.contain(
        tour.name
      )
    ))
  })

  it('has the logout link', () => {
    expect(wrapper.find('.bottom a').text()).to.contain(
      'Logout'
    )
  })
})
