import { useRouteError } from "react-router-dom";

const App: React.FC = () => {
  const error: any = useRouteError();
  console.error(error);

  return <main>
    <h1>Oops!</h1>
    <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
  </main>
}

export default App