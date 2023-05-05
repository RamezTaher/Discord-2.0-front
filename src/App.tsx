import { PropsWithChildren, useState } from "react"
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
import { Provider as ReduxProvider } from "react-redux"
import { store } from "./store"
import { Socket } from "socket.io-client"

type Props = {
  user?: IUser
  setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>
  socket: Socket
}

function AppWithProviders({
  children,
  user,
  setUser,
}: PropsWithChildren & Props) {
  return (
    <ReduxProvider store={store}>
      <AuthContext.Provider value={{ user, updateAuthUser: setUser }}>
        <SocketContext.Provider value={socket}>
          {children}
        </SocketContext.Provider>
      </AuthContext.Provider>
    </ReduxProvider>
  )
}

function App() {
  const [user, setUser] = useState<IUser>()

  return (
    <>
      <AppWithProviders user={user} setUser={setUser} socket={socket}>
        <Routes>
          <Route
            path="/channels"
            element={
              <ProtectedAuthRouter>
                <Channels />
              </ProtectedAuthRouter>
            }
          >
            <Route
              path="/channels/:id"
              element={
                <ProtectedAuthRouter>
                  <Channel />
                </ProtectedAuthRouter>
              }
            ></Route>
          </Route>

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </AppWithProviders>
    </>
  )
}

export default App
