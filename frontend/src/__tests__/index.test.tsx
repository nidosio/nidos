import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Index from '../pages/index'

describe('index', () => {
  it('renders', () => {
    const wrapper = render(<Index />)
    expect(wrapper.getByText('Nidos')).toBeInTheDocument()
  })
})
