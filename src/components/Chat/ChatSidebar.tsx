import { useState } from "react"
import {
  ChannelItem,
  ChannelItemsContainer,
  ChatSidebarHeader,
  ChatSidebarStyle,
} from "../../utils/styles"
import { AiOutlinePlus } from "react-icons/ai"
import { IChannel } from "../../@types"
import { useNavigate } from "react-router-dom"
import styles from "./index.module.scss"
import ChatNew from "./ChatNew"

type Props = {
  channels: IChannel[]
}

const ChatSidebar = ({ channels }: Props) => {
  const navigate = useNavigate()
  const [isModelOpen, setIsModelOpen] = useState(false)
  return (
    <>
      {isModelOpen && <ChatNew setIsModelOpen={setIsModelOpen} />}
      <ChatSidebarStyle>
        <ChatSidebarHeader>
          DIRECT MESSAGES
          <div onClick={() => setIsModelOpen(true)}>
            <AiOutlinePlus size={22} />
          </div>
        </ChatSidebarHeader>
        <ChannelItemsContainer>
          {channels.map((channel) => (
            <ChannelItem
              onClick={() => navigate(`/channels/${channel.id}`)}
              key={channel.id}
            >
              <div className={styles.channelAvatar}></div>
              <div className={styles.channelInformations}>
                <div className={styles.channelName}>{channel.name}</div>
                <div className={styles.lastMessage}>{channel.lastMessage}</div>
              </div>
            </ChannelItem>
          ))}
        </ChannelItemsContainer>
      </ChatSidebarStyle>
    </>
  )
}

export default ChatSidebar
