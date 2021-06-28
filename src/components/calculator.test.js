import { shallow } from 'enzyme'
import Calculator from './calculator'
import Display from './display'

describe('Calculator', () => {
  let wrapper

  beforeEach(() => (wrapper = shallow(<Calculator />)))

  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1)
  })

  // it('should render the Display Component', () => {
  //   expect(wrapper.find(<Display />).length).toEqual(1)
  // })
})
