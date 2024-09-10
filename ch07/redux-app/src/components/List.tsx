import { useAppDispatch, useAppSelector } from "../hooks";
import { del } from "../slices/todo";
import { useGetTodosQuery } from "../services/todoApi";

const List: React.FC = () => {
  const reducerTodo = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch()
  const listTodo = reducerTodo.listTodo

  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery('1')

  console.log('data', data);
  console.log('error', error);
  console.log('isLoading', isLoading);
  
  
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
    {
      isLoading 
        ? <p>loading...</p>
        : <p>
          userId: {data.userId} <br/>
          title: {data.title} <br/>
        </p>
    }
  </div>
}

export default List