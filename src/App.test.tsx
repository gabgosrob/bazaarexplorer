import { render, screen } from '@testing-library/react'

import App from './App'

test('demo', () => {
  render(<App />)
  expect(true).toBeTruthy()
})
