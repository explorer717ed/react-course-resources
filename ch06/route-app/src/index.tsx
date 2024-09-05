import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import About from './About';
import Contact from './Contact';
import ErrorPage from './ErrorPage';
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  { path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "about", element: <About /> },
      { path: "contact/:id", element: <Contact /> },
    ]
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
