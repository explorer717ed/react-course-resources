// Unit3 "useState"

import { useState } from "react"

const Child: React.FC = () => {

  let [count, setCount] = useState(0)

  const onAddOne = () => {
    
    // IF call them twice, they merely set the same value twice.
    // setCount(count +1)
    // setCount(count +1) 

    // To call setCount twice, use call back function to get prev status
    const cb = (prev: number) => prev + 1
    setCount(cb)
    setCount(cb)
  }
  return (
    <main>
      <button onClick={onAddOne}>+1 (Now: {count})</button>
    </main>
  )
}

const Main: React.FC = () => {

  let [count, setCount] = useState(0)

  const onAddOne = () => {
    setCount(count +1)
  }

  // <div> will receive the bubbling click event from <button>
  return (
    <main>
      <div onClick={onAddOne}>
        count: {count}
        <Child/>
      </div>
    </main>
  )
}

export default Main