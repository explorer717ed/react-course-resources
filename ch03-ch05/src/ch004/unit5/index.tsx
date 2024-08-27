import { useEffect, useState } from "react"

let interval: NodeJS.Timeout | null = null
let num = 0

const App: React.FC = () => {

  const [counter, setCounter] = useState(0)
  useEffect(()=>{
    console.log('useEffect');
    interval = setInterval(()=>{
      num ++
      console.log(num);
    }, 1000)
    
    return ()=>{
      console.log('before next re-render');
      
      if(interval){
        num = 0
        clearInterval(interval)
      }
    }
  }, [counter])

  const onAdd = () => {
    setCounter(counter +1)
  }
  return (
    <main>
      <h1>Timer</h1>
      <button onClick={onAdd}>+1</button>
    </main>
  )
}

export default App