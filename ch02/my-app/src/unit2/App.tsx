import React from "react"
import "./App.css";
import Header from "./components/Header";

// a component for local use.
const Body: React.FC = () => {
  return (
    <main>
      <h1 className="headline">Wow</h1>
      <img src="/logo192.png" alt="" />
    </main>
  )
}

const App: React.FC = () => {
  // return React.createElement('h1', {}, 'Wow')

  // <>fragment as root element
  return (
    <>
      <Header/>
      <Body/>
    </>
  )

}

export default App