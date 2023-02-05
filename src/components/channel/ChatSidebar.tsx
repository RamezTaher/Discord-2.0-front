import { useState, useContext } from "react"
import {
  ChannelItem,
  ChannelItemsContainer,
  ChatSidebarHeader,
  ChatSidebarStyle,
} from "../../utils/styles"
import { AiOutlinePlus } from "react-icons/ai"
import { useNavigate } from "react-router-dom"
import styles from "./index.module.scss"
import ChatNew from "./ChatNew"
import { IChannel } from "../../@types"
import { AuthContext } from "../../context/AuthContext"

type Props = {
  channels: IChannel[]
}

const ChatSidebar = ({ channels }: Props) => {
  const navigate = useNavigate()
  const [isModelOpen, setIsModelOpen] = useState(false)
  const { user } = useContext(AuthContext)
  const getTheOtherSideOfChannel = (channel: IChannel) => {
    return channel.sender.id === user?.id ? channel.receiver : channel.sender
  }
  return (
    <>
      {isModelOpen && <ChatNew setIsModelOpen={setIsModelOpen} />}
      <ChatSidebarStyle>
        <ChatSidebarHeader>
          DIRECT MESSAGES
          <div className={styles.icon} onClick={() => setIsModelOpen(true)}>
            <AiOutlinePlus size={20} />
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
                <div className={styles.channelName}>
                  {`${getTheOtherSideOfChannel(channel).firstName} ${
                    getTheOtherSideOfChannel(channel).lastName
                  }`}
                </div>
                <div className={styles.lastMessage}>Last Message Sent</div>
              </div>
            </ChannelItem>
          ))}
        </ChannelItemsContainer>
      </ChatSidebarStyle>
    </>
  )
}

export default ChatSidebar
