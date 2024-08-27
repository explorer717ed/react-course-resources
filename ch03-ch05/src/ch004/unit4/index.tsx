import { useEffect, useState } from "react"

const App: React.FC = () => {
  const [num, setNum] = useState(0)

  const [text, setText] = useState('')

  // Shoudn't set outside 
  // because it'll triggers re-render again and again
  // setText('Even')

  const onAddOne = () => {
    
    const cb = (prev: number) => prev+1
    setNum(cb)
    // setNum twice but only trigger useEffect once
    // setNum(cb) 
  }

  useEffect(()=>{
    console.log('num', num);
    if(num%2 === 0) setText('Even')
    else setText('Odd')
  }, [num])

  useEffect(()=>{
    console.log('kinda like onMount');
    
  }, [])

  return (
    <main>
      <h1>Num: {num} is an {text.toLowerCase()}.</h1>
      <button onClick={onAddOne}>+1</button>
    </main>
  )
}

export default App