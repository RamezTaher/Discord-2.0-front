import { formatRelative } from "date-fns"
import React from "react"
import {
  MessageItemAvatar,
  MessageItemContainer,
  MessageItemContent,
  MessageItemDetails,
  MessageItemHeader,
} from "."
import { IMessage, IUser } from "../../@types"

type Props = {
  user?: IUser
  message: IMessage
  onMessageOptions: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}
const FormattedMessage = ({ user, message, onMessageOptions }: Props) => {
  return (
    <MessageItemContainer onMessageOptions={onMessageOptions}>
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
        <MessageItemContent padding="8px 0 0 0">
          {message.messageContent}
        </MessageItemContent>
      </MessageItemDetails>
    </MessageItemContainer>
  )
}

export default FormattedMessage
