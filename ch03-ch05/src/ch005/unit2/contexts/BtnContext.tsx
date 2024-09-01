import { createContext, useContext, useState } from "react";

const defaultVal = {
  isBtnVisible: false,
  setIsBtnVisible: (val: boolean) => {}
}
const BtnContext = createContext(defaultVal)

// Provider
export const BtnProvider: React.FC = ({ children }) => {
  const [isBtnVisible, setIsBtnVisible] = useState(false)
  return <>
    <BtnContext.Provider value={{ isBtnVisible, setIsBtnVisible }}>
      {children}
    </BtnContext.Provider>
  </>
}

// consumer
export const useBtnContext = () => {
  return useContext(BtnContext)
}