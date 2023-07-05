import { formatRelative } from "date-fns"
import React, { FC, useState } from "react"
import {
  MessageItemAvatar,
  MessageItemContainer,
  MessageItemContent,
  MessageItemDetails,
  MessageItemHeader,
  MessagesOptions,
} from "."
import { IMessage, IUser } from "../../@types"
import { AiTwotoneWarning } from "react-icons/ai"

type Props = {
  user?: IUser
  message: IMessage
}
const FormattedMessage: FC<Props> = ({ user, message }) => {
  const [showMessageOptions, setShowMessageOptions] = useState<boolean>(false)
  const handleShow = () => {
    setShowMessageOptions(true)
  }
  const handleHide = () => {
    setShowMessageOptions(false)
  }

  return (
    <MessageItemContainer
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      style={{ marginTop: "10px" }}
    >
      <MessageItemAvatar />
      <MessageItemDetails>
        <MessageItemHeader>
          <span
            className="authorName"
            style={{
              color: user?.id === message.sender.id ? "#757575" : "#5E8BFF",
            }}
          >
            {message.sender.firstName} {message.sender.lastName}
          </span>
          <span className="time">
            {formatRelative(new Date(message.sentAt), new Date())}
          </span>
        </MessageItemHeader>
        <MessageItemContent>
          {message.messageContent}
          {showMessageOptions && (
            <MessagesOptions>
              <div>Delete</div>
            </MessagesOptions>
          )}
        </MessageItemContent>
      </MessageItemDetails>
    </MessageItemContainer>
  )
}

export default FormattedMessage
