import { useState } from "react"

interface ExampleProp {
  isBtnVisible: boolean
}

const A: React.FC<ExampleProp> = ({isBtnVisible}) => {
  return <div>
    A:
    <B isBtnVisible={isBtnVisible} />
  </div>
}
const B: React.FC<ExampleProp> = ({isBtnVisible}) => {
  return <div>B: <C isBtnVisible={isBtnVisible} /></div>
}
const C: React.FC<ExampleProp> = ({isBtnVisible}) => {
  return <div>C: 
    <button style={{display: isBtnVisible ? 'inline': 'none'}}>Click Me</button>
  </div>
}

const Main: React.FC = () => {
  const [isBtnVisible, setIsBtnVisible] = useState(true)
  return (
    <main><A isBtnVisible={isBtnVisible}/></main>
  )
}

export default Main