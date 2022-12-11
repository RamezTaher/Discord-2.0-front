import { useState } from "react"
import { Routes, Route } from "react-router-dom"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Hello home page</h1>} />
        <Route
          path="conversations"
          element={<h1>Conversations page</h1>}
        ></Route>
        <Route
          path="conversations/:id"
          element={<h1>Conversation single page</h1>}
        ></Route>
      </Routes>
    </>
  )
}

export default App
