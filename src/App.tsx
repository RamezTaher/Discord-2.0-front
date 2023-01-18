import { useState } from "react"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { useAuth } from "./hooks/useAuth"
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
        <Route
          path="/channels"
          element={
            <ProtectedAuthRouter>
              <Channels />
            </ProtectedAuthRouter>
          }
        >
          <Route path="/channels/:id" element={<Channel />}></Route>
        </Route>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  )
}

type Props = {
  children: React.ReactNode
}

const ProtectedAuthRouter = ({ children }: Props) => {
  const auth = useAuth()
  const location = useLocation()
  console.log(auth)
  if (!auth.user) {
    console.log(auth)
    return <Navigate to="/login" state={{ from: location }} replace />
  }
  return <>{children}</>
}

export default App
