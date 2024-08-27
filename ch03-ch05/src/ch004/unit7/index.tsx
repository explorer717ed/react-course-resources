import { useState } from "react"

// Customize hook's naming begins with "use", 
// so that react knows it's a hook function and should be indexed.
// (if ... else ... condition not allowed)

const useFetchComment = () => {
  const [listComment, setComment] = useState<Comment[]>([])
  const getComment = async (id:string) => {
    try {
      const rsp = await fetch('https://jsonplaceholder.typicode.com/comments?postId=' + id)
      const data = await rsp.json() as Comment[]
  
      setComment(data)
    } catch (err) {
      console.log('err', err);
    }
  }

  return { listComment, getComment }
}

const Main: React.FC = () => {
  const { listComment, getComment } = useFetchComment()
  
  return (
    <main>
      <button onClick={()=>getComment("1")}>Post 1</button>
      <button onClick={()=>getComment("2")}>Post 2</button>
      <ul>
        {
          listComment.length 
            ? listComment?.map(comment => {
              return <li key={comment.id}>{comment.name} ({comment.email})</li>
            })
            : null
        }

      </ul>
    </main>
  )
}

export default Main

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}