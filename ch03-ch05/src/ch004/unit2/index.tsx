
// React Hook naming begin with "use".
// useEffect
// useState

import { useEffect, useState } from "react";

interface PropsScoreBoard {
  name: string
}

const getTotalScore = (name: string) => {
  switch (name) {
    case 'a':
      return 100;
    case 'b':
      return 2000;
  
    default:
      return 0
  }
}

const getCurrentScore = () => 100

const ScoreBoard: React.FC<PropsScoreBoard> = ({ name }) => {
  const [score, setScore] = useState(0)
  
  // "useEffect" can't be called conditionally. eg. if...else...
  useEffect(()=>{
    setScore(getTotalScore(name) + getCurrentScore())
  }, [])


  return (
    <div>{name} Total Score: { score } <br /></div>
  )
}

// function ScoreBoard(W)

const getFCScoreBoard = (name: string) => {
  const score = getTotalScore(name)

  return ScoreBoard({name})
}


const Main: React.FC = () => {

  const ScoreA = getFCScoreBoard('a')
  const ScoreB = getFCScoreBoard('b')
  console.log(ScoreA);
  console.log(<ScoreBoard name="a"/>);
  
  
  return (
    <main>
      <ScoreBoard name="a"/>
      <ScoreBoard name="b"/>
    </main>
  )
}

export default Main