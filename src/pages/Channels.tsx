import { Outlet, useParams } from "react-router-dom"

import { Page } from "../utils/styles"
// import mockChannels from "../mocks/mockChannels"
// import ChatSidebar from "../components/chat/ChatSidebar"
// import ChatDefault from "../components/chat/ChatDefault"

const Channels = () => {
  const { id } = useParams()
  return (
    <Page>
      {/* <ChatSidebar channels={mockChannels} />
      {!id && <ChatDefault />} */}
      <Outlet />
    </Page>
  )
}

export default Channels
