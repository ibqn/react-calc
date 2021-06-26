// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from 'react'
import { shallow } from 'enzyme'
import App from './app'
import Calculator from './components/calculator'

describe('App', () => {
  let wrapper

  beforeEach(() => (wrapper = shallow(<App />)))

  it('should render correctly', () => expect(wrapper).toMatchSnapshot())

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  it('should render the Calculator Component', () => {
    expect(wrapper.containsMatchingElement(<Calculator />)).toEqual(true)
  })
})
