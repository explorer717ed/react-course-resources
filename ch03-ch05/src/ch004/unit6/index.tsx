import { useEffect, useState } from "react"

const Main: React.FC = () => {
  const [data, setData] = useState<Post>()
  const [errMsg, setErrMsg] = useState("")
  
  const getUser = async (id: string|number) => {
    try {
      const rsp = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
      if(!rsp.ok) throw rsp
      else setErrMsg("")
      
      const data = await rsp.json() as Post
      console.log('data',data);
      setData(data)
      
    } catch (error) {
      console.log('error', error);
      setErrMsg(String((error as Response).status))
    }
  }

  
  return (
    <main>
      <button onClick={() => getUser(1)}>Post 1</button>
      <button onClick={() => getUser(2)}>Post 2</button>
      <button onClick={() => getUser(-2)}>Post -2</button>
      { errMsg ? <span> error status: {errMsg}</span> : null }
      { data?.title 
        ? <article> <h1>{data?.title}</h1> {data?.body}</article>
        : <div>loading</div> 
      }
    </main>
  )
}

export default Main

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}