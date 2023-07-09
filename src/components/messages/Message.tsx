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
import { MessageOptions } from "./MessageOptions"
import { MessageOptionsContext } from "../../context/MessageOptionsContext"
import { EditMessage } from "./EditMessage"

const Message = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [showMenu, setShowMenu] = useState(false)
  const [points, setPoints] = useState({ x: 0, y: 0 })
  const [selectedMessage, setSelectedMessage] = useState<IMessage | null>(null)
  const [selectedEditMessage, setSelectedEditMessage] =
    useState<IMessage | null>(null)
  const [originalEditMessage, setOriginalEditMessage] =
    useState(selectedEditMessage)
  const [isEditing, setIsEditing] = useState(false)
  const channelMessages = useSelector(
    (state: RootState) => state.messages.messages
  )

  const onContextMenu = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    message: IMessage
  ) => {
    e.preventDefault()
    setShowMenu(true)
    setPoints({ x: e.pageX, y: e.pageY })
    setSelectedMessage(message)
  }

  const onEditMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!selectedEditMessage) return
    setSelectedEditMessage(
      (prev) => prev && { ...prev, content: e.target.value }
    )
  }
  useEffect(() => {
    const handleClick = () => setShowMenu(false)
    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick)
  }, [])

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) =>
      e.key === "Escape" && setIsEditing(false)
    window.addEventListener("keydown", handleKeydown)
    return () => window.removeEventListener("keydown", handleKeydown)
  }, [id])

  useEffect(() => {
    return () => {
      console.log("Unmounting")
      setSelectedMessage(null)
      setSelectedEditMessage(null)
      setIsEditing(false)
    }
  }, [id])

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
            onContextMenu={(e) => onContextMenu(e, message)}
            key={idx}
            user={user}
            message={message}
            isEditing={isEditing}
            selectedEditMessage={selectedEditMessage}
            onEditMessageChange={onEditMessageChange}
          />
        )
      }
      if (currentMessage.sender.id === nextMessage.sender.id) {
        return (
          <MessageItemContainer
            key={idx}
            onContextMenu={(e) => onContextMenu(e, message)}
          >
            {isEditing && message.id === selectedEditMessage?.id ? (
              <MessageItemContent padding="0 30px 0 65px">
                <EditMessage
                  selectedEditMessage={selectedEditMessage}
                  onEditMessageChange={onEditMessageChange}
                />
              </MessageItemContent>
            ) : (
              <MessageItemContent padding="0 30px 0 65px">
                {message.messageContent}
              </MessageItemContent>
            )}
          </MessageItemContainer>
        )
      }
      return (
        <FormattedMessage
          onContextMenu={(e) => onContextMenu(e, message)}
          key={idx}
          user={user}
          message={message}
          isEditing={isEditing}
          selectedEditMessage={selectedEditMessage}
          onEditMessageChange={onEditMessageChange}
        />
      )
    })
  }

  useEffect(() => {
    formatMessages()
  }, [])
  return (
    <MessageOptionsContext.Provider
      value={{
        message: selectedMessage,
        editMessage: selectedEditMessage,
        setMessage: setSelectedMessage,
        setEditMessage: setSelectedEditMessage,
      }}
    >
      <MessageContainerStyle>
        {formatMessages()}
        {showMenu && (
          <MessageOptions setIsEditing={setIsEditing} points={points} />
        )}
      </MessageContainerStyle>
    </MessageOptionsContext.Provider>
  )
}

export default Message
