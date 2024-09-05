import { Link, useNavigate } from "react-router-dom";

function App() {
  const n = useNavigate()
  return (
    <div>
      <main>
        <h1>About</h1>
        <ul>
          <li>
            <button onClick={() => n('/contact/1')}>Contact 1</button>
          </li>
          <li>
            <Link to="/contact/2">Contact 2</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
