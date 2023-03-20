import { useState } from "react"
import { Routes, Route } from "react-router-dom"
import ProtectedAuthRouter from "./components/ProtectedAuthRoute"
import { AuthContext } from "./context/AuthContext"
import Channel from "./pages/Channel"
import Channels from "./pages/Channels"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import Register from "./pages/Register"
import "./styles/main.scss"
import { IUser } from "./@types"
import { socket, SocketContext } from "./context/SocketContext"

function App() {
  const [user, setUser] = useState<IUser>()

  return (
    <>
      <AuthContext.Provider value={{ updateAuthUser: setUser, user }}>
        <SocketContext.Provider value={socket}>
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
        </SocketContext.Provider>
      </AuthContext.Provider>
    </>
  )
}

export default App
