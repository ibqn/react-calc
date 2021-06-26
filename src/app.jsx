import styled from 'styled-components'
import Calculator from './components/calculator'

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  align-items: center;
  display: flex;
  justify-content: center;
`

Container.displayName = 'div'

const App = () => {
  return (
    <Container>
      <Calculator />
    </Container>
  )
}

export default App
