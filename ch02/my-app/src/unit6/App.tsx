import { useState } from "react"
import styled from "styled-components";

const Btn = styled.button<{btnType1: boolean}>`
  ackground: transparent;
  border-radius: 3px;
  border: 1px solid var(--accent-color);
  color: ${props => props.btnType1 ? 'teal': 'salmon'};
  display: inline-block;
  margin: 0.5rem 1rem;
  padding: 0.5rem 0;
  transition: all 200ms ease-in-out;
  width: 11rem;

  &:hover {
    filter: brightness(0.85);
  }

`

const AppStyle1 = {
  color: 'teal'
}
const AppStyle2 = {
  color: 'salmon'
}

const App: React.FC = () => {
  const [isOne, setIsOne] = useState(true)

  const toggleColor = () => {
    setIsOne(!isOne)
  }

  return (
    <main style={isOne ? AppStyle1 : AppStyle2}>
      hehe {isOne}
      <button onClick={toggleColor}>toggle</button>
      <Btn btnType1={isOne}>hehe</Btn>
    </main>
  )
}

export default App