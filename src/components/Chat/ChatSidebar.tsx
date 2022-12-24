import React from "react"
import { ChatSidebarStyle } from "../../utils/styles"
import { AiOutlinePlus } from "react-icons/ai"

const ChatSidebar = () => {
  return (
    <ChatSidebarStyle>
      <header>
        DIRECT MESSAGES
        <AiOutlinePlus size={22} />
      </header>
    </ChatSidebarStyle>
  )
}

export default ChatSidebar
