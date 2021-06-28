import PropTypes from 'prop-types'

const Display = ({ displayValue }) => (
  <div>
    <p className="display-value">{displayValue}</p>
  </div>
)

Display.propTypes = {
  displayValue: PropTypes.string.isRequired
}

export default Display
