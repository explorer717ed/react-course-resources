import { useState } from "react"
import { useAppDispatch } from "../hooks"
import { add, addTime } from "../slices/todo"

const TodoForm: React.FC = () => {
  const [inputTodo, setInputTodo] = useState("")

  const dispatch = useAppDispatch()

  const handleChangeInputTodo = (evt: React.FormEvent<HTMLInputElement>) => {
    setInputTodo(evt.currentTarget.value)
  }

  const handleSubmit = () => {
    if(!inputTodo) return
    dispatch(add(inputTodo))
    setInputTodo("")
  }

  const handleTime = () => {
    dispatch(addTime())
  }

  return <>
    <h1>TODO LIST</h1>
    <div className="form_todo">
      <div>
        <input value={inputTodo} onChange={handleChangeInputTodo} type="text" />
      </div>
      <div>
        <button onClick={handleSubmit}>SUBMIT</button>
      </div>
      <div>
        <button onClick={handleTime}>TIMESTAMP</button>
      </div>
    </div>
  </>
}

export default TodoForm