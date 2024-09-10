import { useAppDispatch, useAppSelector } from "../hooks";
import { del } from "../slices/todo";

const List: React.FC = () => {
  const reducerTodo = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()
  const listTodo = reducerTodo.listTodo
  
  const handleDel = (i: number) => {
    dispatch(del(i))
  }
  return <div>
    <h2>LIST</h2>
    <ul>
      {
        listTodo.map((item, idx)=>{
          return <li key={idx+item}>
            {idx + 1}: {item}
            <button onClick={() => handleDel(idx)} className="btn-s">DELETE</button>
          </li>
        })
      }
    </ul>
  </div>
}

export default List