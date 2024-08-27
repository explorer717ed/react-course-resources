import { useRef, useState } from "react"


let sum = 0

const Main: React.FC = () => {

  const [isShowSum, setIsShowSum] = useState(false)
  const [isShowInnerSum, setIsShowInnerSum] = useState(false)
  const innerSum = useRef(0)
  console.log('innerSum', sum);
  const onClick = () => {
    sum ++
    innerSum.current += 1

    if(sum == 5){
      setIsShowSum(true)
    }else if(sum > 15){
      setIsShowSum(false)
    }
    console.log('sum', sum);
    
    if(innerSum.current == 5){
      setIsShowInnerSum(true)
    }else if(innerSum.current > 15){
      setIsShowInnerSum(false)
    }
    console.log('onClick innerSum', sum);
  }
  
  return (
    <main>
      <h1>useRef</h1>
      <button onClick={onClick}>+1</button>
      { isShowSum && <div>hidden block for sum</div>}
      { isShowInnerSum && <div>hidden block for innerSum</div>}
      
    </main>
  )
}

export default Main