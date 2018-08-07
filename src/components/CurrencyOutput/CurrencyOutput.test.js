import React from 'react'
import { shallow } from 'enzyme'

import CurrencyOutput from './CurrencyOutput.js'

it('renders without props', () => {
  shallow(<CurrencyOutput />)
})
