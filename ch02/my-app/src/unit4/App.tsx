import React, { useState } from "react"

// "hook" 
// props
// state => useState triggers render()

interface Btn {
  count: number
  onAdd: () => void
}

const Btn: React.FC<Btn> = ({ count, onAdd }) => {
  return (
    <button onClick={onAdd}>
      +1<br/>
      <span>total: {count} </span>
    </button>
  )
}

const App: React.FC = () => {
  const [num, setNum] = useState(0)

  const addOne = () => {
    setNum(num + 1)
    console.log('addOne', num);
  }

  return (
    <main>
      <h1>Count: {num}</h1>
      <Btn count={num} onAdd={addOne} />
    </main>
  )

}

export default App