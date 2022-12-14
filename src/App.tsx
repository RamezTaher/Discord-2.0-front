import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import Register from "./pages/Register"
import "./styles/main.scss"
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
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
