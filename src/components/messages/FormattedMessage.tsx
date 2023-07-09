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
import { EditMessage } from "./EditMessage"

type Props = {
  user?: IUser
  message: IMessage
  onContextMenu: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  isEditing: boolean
  selectedEditMessage: IMessage | null
  onEditMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
const FormattedMessage: FC<Props> = ({
  user,
  message,
  onContextMenu,
  isEditing,
  selectedEditMessage,
  onEditMessageChange,
}) => {
  return (
    <MessageItemContainer
      onContextMenu={onContextMenu}
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
        {isEditing && message.id === selectedEditMessage?.id ? (
          <MessageItemContent padding="8px 0 0 0">
            <EditMessage
              selectedEditMessage={selectedEditMessage}
              onEditMessageChange={onEditMessageChange}
            />
          </MessageItemContent>
        ) : (
          <MessageItemContent padding="8px 0 0 0">
            {message.messageContent}
          </MessageItemContent>
        )}
      </MessageItemDetails>
    </MessageItemContainer>
  )
}

export default FormattedMessage
