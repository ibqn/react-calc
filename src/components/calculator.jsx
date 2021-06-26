import { useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background-color: var(--calculator-background-color);
  height: var(--calculator-height);
  width: var(--calculator-width);
`
Container.displayName = 'div'

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState('0')
  const [numbers, setNumbers] = useState([])
  const [operators, setOperators] = useState([])
  const [selectedOperator, setSelectedOperator] = useState('')
  const [storedValue, setStoredValue] = useState('')

  const callOperator = () => {}
  const setOperator = () => {}
  const updateDisplay = () => {}

  return <Container>calc</Container>
}

export default Calculator
