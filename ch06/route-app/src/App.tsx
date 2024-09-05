import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <span> | </span>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <Outlet/>
    </div>
  );
}

export default App;
