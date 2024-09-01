import { BtnProvider, useBtnContext } from "./contexts/BtnContext";

const A: React.FC = () => {
  return <div>A: <B/></div>
}
const B: React.FC = () => {
  const { isBtnVisible } = useBtnContext()
  console.log('B:', isBtnVisible);
  return <div>B: <C/></div>
}
const C: React.FC = () => {
  const { isBtnVisible, setIsBtnVisible } = useBtnContext()
  console.log('C:', isBtnVisible);

  const setVal = () => {
    setIsBtnVisible(!isBtnVisible)
  }
  
  return <div>
    C:
    <button onClick={setVal}>Click Me</button>
  </div>
}

const Main: React.FC = () => {
  return <BtnProvider>
    <A/>
  </BtnProvider>
}

export default Main