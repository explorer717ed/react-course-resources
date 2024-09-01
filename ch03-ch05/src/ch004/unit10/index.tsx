import { useState } from "react";

const Main: React.FC = () => {

  const [acc, setAcc] = useState("")
  const [psw, setPsw] = useState("")

  const getLoginForm = () => {
    console.log(acc, psw);
  }

  const onChangeAcc = (evt: React.FormEvent<HTMLInputElement>) => {
    setAcc(evt.currentTarget.value)
  }
  const onChangePsw = (evt: React.FormEvent<HTMLInputElement>) => {
    setPsw(evt.currentTarget.value)
  }

  return (
    <main style={{margin: '20px'}}>
      <h1>Form</h1>
      <form action="javascript:;">
        <div>
          Account: <input value={acc} onChange={onChangeAcc} id="inputAccount" type="text" /><br />
          Your input: {acc}
        </div>
        <div>
          Password: <input value={psw} onChange={onChangePsw} id="inputPsw" type="password" /> <br />
          Your input: {psw}
        </div>
        <div>
          <button onClick={getLoginForm} type="submit">Log in</button>
        </div>
      </form>
    </main>
  )
}

export default Main