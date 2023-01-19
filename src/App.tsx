import { useEffect, useState } from "react"
import { Routes, Route, useLocation, Navigate } from "react-router-dom"
import { useAuth } from "./hooks/useAuth"
import Channel from "./pages/Channel"
import Channels from "./pages/Channels"
import Home from "./pages/Home"
import LogIn from "./pages/LogIn"
import Register from "./pages/Register"
import "./styles/main.scss"
import { IUser } from "./utils/@types"
import { getAuth } from "./utils/api-interceptor"

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
  const [user, setUser] = useState<IUser | undefined>()
  const [loading, setLoading] = useState(false)
  const location = useLocation()
  useEffect(() => {
    setLoading(true)
    getAuth()
      .then(({ data }) => {
        setUser(data)
        setLoading(false)
      })
      .catch((error) => {
        setLoading(false)
        console.log(error)
      })
  }, [user])

  if (loading) {
    return <div>Loading</div>
  } else {
  }
  return <>{children}</>
}

export default App
