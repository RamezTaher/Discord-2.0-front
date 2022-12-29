import {
  ChannelItem,
  ChannelItemsContainer,
  ChatSidebarHeader,
  ChatSidebarStyle,
} from "../../utils/styles"
import { AiOutlinePlus } from "react-icons/ai"
import { IChannel } from "../../@types"
import styles from "./index.module.scss"
import { useNavigate } from "react-router-dom"

type Props = {
  channels: IChannel[]
}

const ChatSidebar = ({ channels }: Props) => {
  const navigate = useNavigate()
  return (
    <ChatSidebarStyle>
      <ChatSidebarHeader>
        DIRECT MESSAGES
        <AiOutlinePlus size={22} />
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
  )
}

export default ChatSidebar
