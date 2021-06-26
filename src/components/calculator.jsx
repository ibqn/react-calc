import { useState } from 'react'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [numbers, setNumbers] = useState([])
  const [operators, setOperators] = useState([])
  const [selectedOperator, setSelectedOperator] = useState('')
  const [storedValue, setStoredValue] = useState('')

  const callOperator = () => {}
  const setOperator = () => {}
  const updateDisplay = () => {}

  return <div>calc</div>
}

export default Calculator
