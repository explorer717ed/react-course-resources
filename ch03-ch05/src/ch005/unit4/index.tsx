import { useState, memo, useMemo } from "react"


const B: React.FC<{num: number, data: {name: string}}> = memo(({num, data}) => {
  console.log('render B');
  
  return <div>B - {data.name} - {num}</div>
})

/*
  Actually, if re-rendering child components is not hard, no need to memo it 
  because memoing can be harder.
  So, whether to use memo depends on the case.
  Some suitable scenerios:
  1. async fetch data
  2. heavy calculation
*/
const Main: React.FC = () => {
  console.log('render Main');
  
  const [val, setVal] = useState(false)
  const [data, setData] = useState({name: ''})
  const [num, setNum] = useState(0)

  const memoData = useMemo(()=>{
    return data
  },[data.name])

  return <main>
    <h1>App</h1>
    <B num={num} data={memoData}/>
    <button onClick={() => {setVal(!val)}}>re render</button>
    <button onClick={() => {setNum(50)}}>set num</button>
    <button onClick={() => {setData({ name: 'haha' })}}>set data</button><br />
  </main>
}

export default Main