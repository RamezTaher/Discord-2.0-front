import { useContext, useEffect, useState } from "react"
import {
  MessageContainerStyle,
  MessageItemContainer,
  MessageItemContent,
  MessageOptionsStyle,
} from "."
import { IMessage } from "../../@types/message"
import { AuthContext } from "../../context/AuthContext"
import FormattedMessage from "./FormattedMessage"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { MessageOptionsContext } from "../../context/MessageOptionsContext"
import { MessageOptions } from "./MessageOptions"

const Message = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [showMessageOptions, setShowMessageOptions] = useState(false)
  const [points, setPoints] = useState({ x: 0, y: 0 })
  const [selectedMessage, setSelectedMessage] = useState<IMessage | null>(null)
  const channelMessages = useSelector(
    (state: RootState) => state.messages.messages
  )

  const onMessageOptions = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    message: IMessage
  ) => {
    e.preventDefault()
    setShowMessageOptions(true)
    setPoints({ x: e.pageX, y: e.pageY })
    setSelectedMessage(message)
  }
  useEffect(() => {
    const handleClick = () => setShowMessageOptions(false)
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [])

  const formatMessages = () => {
    const msgs = channelMessages.find((cm) => cm.id === parseInt(id!))
    if (!msgs) return []
    return msgs?.messages?.map((message, idx, messagesArray) => {
      const nextMessageIdx = idx + 1
      const currentMessage = messagesArray[idx]
      const nextMessage = messagesArray[nextMessageIdx]
      if (messagesArray.length === idx + 1) {
        // last msg
        return (
          <FormattedMessage
            onMessageOptions={(e) => onMessageOptions(e, message)}
            key={idx}
            user={user}
            message={message}
          />
        )
      }
      if (currentMessage.sender.id === nextMessage.sender.id) {
        return (
          <MessageItemContainer
            onClick={(e) => onMessageOptions(e, message)}
            key={idx}
          >
            <MessageItemContent padding="0 0 0 70px">
              {message.messageContent}
            </MessageItemContent>
          </MessageItemContainer>
        )
      }
      return (
        <FormattedMessage
          onMessageOptions={(e) => onMessageOptions(e, message)}
          key={idx}
          user={user}
          message={message}
        />
      )
    })
  }

  useEffect(() => {
    formatMessages()
  }, [])
  return (
    <MessageOptionsContext.Provider
      value={{ message: selectedMessage, setMessage: setSelectedMessage }}
    >
      <MessageContainerStyle> {formatMessages()}</MessageContainerStyle>
      {showMessageOptions && <MessageOptions points={points} />}
    </MessageOptionsContext.Provider>
  )
}

export default Message
