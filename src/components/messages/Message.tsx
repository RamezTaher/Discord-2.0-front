import { useContext, useEffect, useState } from "react"
import {
  MessageContainerStyle,
  MessageItemContainer,
  MessageItemContent,
  MessageOptionsStyle,
  MessagesOptions,
} from "."
import { IMessage } from "../../@types/message"
import { AuthContext } from "../../context/AuthContext"
import FormattedMessage from "./FormattedMessage"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../store"

const Message = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const channelMessages = useSelector(
    (state: RootState) => state.messages.messages
  )
  const [showMessageOptions, setShowMessageOptions] = useState<boolean>(false)
  const handleShow = () => {
    setShowMessageOptions(true)
  }
  const handleHide = () => {
    setShowMessageOptions(false)
  }

  const formatMessages = () => {
    const msgs = channelMessages.find((cm) => cm.id === parseInt(id!))
    if (!msgs) return []
    return msgs?.messages?.map((message, idx, messagesArray) => {
      const nextMessageIdx = idx + 1
      const currentMessage = messagesArray[idx]
      const nextMessage = messagesArray[nextMessageIdx]
      if (messagesArray.length === idx + 1) {
        // last msg
        return <FormattedMessage key={idx} user={user} message={message} />
      }
      if (currentMessage.sender.id === nextMessage.sender.id) {
        return (
          <MessageItemContainer
            key={idx}
            onMouseEnter={handleShow}
            onMouseLeave={handleHide}
          >
            <MessageItemContent padding="0 30px 0 70px">
              {message.messageContent}
              {showMessageOptions && (
                <MessagesOptions>
                  <div>Delete</div>
                </MessagesOptions>
              )}
            </MessageItemContent>
          </MessageItemContainer>
        )
      }
      return <FormattedMessage key={idx} user={user} message={message} />
    })
  }

  useEffect(() => {
    formatMessages()
  }, [])
  return <MessageContainerStyle> {formatMessages()}</MessageContainerStyle>
}

export default Message
