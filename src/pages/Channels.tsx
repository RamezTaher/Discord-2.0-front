import { Outlet, useParams } from "react-router-dom"

import { Page } from "../utils/styles"
import mockChannels from "../mocks/mockChannels"
import LoginForm from "../components/forms/LoginForm"
import RegisterForm from "../components/forms/RegisterForm"

const Channels = () => {
  const { id } = useParams()
  return (
    <Page>
      {/* <ChatSidebar channels={mockChannels} />
      {!id && <ChatDefault />} */}
      <LoginForm />
      <RegisterForm />
      <Outlet />
    </Page>
  )
}

export default Channels
