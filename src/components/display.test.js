import { shallow } from 'enzyme'
import Display from './display'

describe('Display', () => {
  let wrapper

  beforeEach(() => (wrapper = shallow(<Display />)))

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })
})
