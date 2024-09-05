import { Form, useParams } from "react-router-dom";

interface Contact {
  id: string
  name: string
  favorite: boolean
}

const Favorite: React.FC<{ contact: Contact }> = ({contact}) => {
  const isFavorite = contact.favorite
  return <Form>
    <button
      name="favorite"
      value={isFavorite ? "false" : "true"}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  </Form>
}
const App: React.FC = () => {
  const {id}: any = useParams()
  console.log(id);
  
  const contact = {
    id: 'na',
    name: '77',
    favorite: true
  }
   return(
    <main>
      <h1>{contact.name}</h1>
      <Favorite contact={contact}/>
    </main>
   )
}

export default App