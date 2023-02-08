import { formatRelative } from "date-fns"
import React from "react"
import { MessageItemAvatar, MessageItemContainer, MessageItemContent, MessageItemDetails, MessageItemHeader } from "."
import { IMessage, IUser } from "../../@types"

type Props = {
  user?: IUser
  message: IMessage
}
const FormattedMessage = ({ user, message }: Props) => {
  return (
    <MessageItemContainer>
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
        <MessageItemContent>{message.messageContent}</MessageItemContent>
      </MessageItemDetails>
    </MessageItemContainer>
  )
}

export default FormattedMessage
