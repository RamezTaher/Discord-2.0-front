import { Routes, Route,  } from "react-router-dom"
import ProtectedAuthRouter from "./components/ProtectedAuthRoute"
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



export default App
