import React from "react"

const App: React.FC = () => {
  const time = new Date().getSeconds()

  return (
    <main>
      {time}
    </main>
  )

}

export default App