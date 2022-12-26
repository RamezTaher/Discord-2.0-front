import React from "react"
import { Outlet, useParams } from "react-router-dom"
import ChatDefault from "../components/chat/ChatDefault"
import ChatSidebar from "../components/chat/ChatSidebar"
import { Page } from "../utils/styles"
import mockChannels from "../mocks/mockChannels"

const Channels = () => {
  const { id } = useParams()
  return (
    <Page>
      <ChatSidebar channels={mockChannels} />
      {!id && <ChatDefault />}
      <Outlet />
    </Page>
  )
}

export default Channels
