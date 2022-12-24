import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import Channel from "./pages/Channel"
import Channels from "./pages/Channels"
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
        <Route path="/channels" element={<Channels />}>
          <Route path="/channels/:id" element={<Channel />}></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
