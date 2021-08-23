import React from 'react'
import { render, cleanup, fireEvent, screen } from '@testing-library/react'

import '@testing-library/jest-dom/extend-expect'

import App from './app'

afterEach(cleanup)


it('should render home page', () => {

  const { container, getByTestId } = render(<App />)

  const link = getByTestId('home-link')

  const header = getByTestId('header')

  const navbar = getByTestId('navbar')

  expect(header).toHaveTextContent("Meeting rooms monitoring");

  expect(container.innerHTML).toMatch('Welcome')

  expect(navbar).toContainElement(link)


});




it('should navigate to the Occupancy page', () => {
  const { container, getByTestId } = render(<App />)

  fireEvent.click(getByTestId('occupancy-link'))

  expect(container.innerHTML).toMatch('meeting rooms occupancy')
})




it('should navigate to the sensor page', () => {
  const { container, getByTestId } = render(<App />)

  fireEvent.click(getByTestId('sensor-link'))

  expect(container.innerHTML).toMatch('Sensors')
})



it('should render the occupancy report', () => {
  const { container, getByTestId } = render(<App />)

  fireEvent.click(getByTestId('occupancy-link'))
  const selectElement = getByTestId('select')
  fireEvent.change(selectElement, { target: { value: 'abd' } })
  fireEvent.click(getByTestId('show-button'))


  expect(container.innerHTML).toMatch('reports room occupancy of ')
})

