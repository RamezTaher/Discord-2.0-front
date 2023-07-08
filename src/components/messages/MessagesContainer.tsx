import React, { useContext, useState } from "react"
import {
  MessageTypingStatus,
  MessagesContainerBody,
  MessagesContainerStyle,
} from "."
import Message from "./Message"
import { MessageInputField } from "./MessageInputField"
import MessagesContainerHeader from "./MessagesContainerHeader"
import { useParams } from "react-router-dom"
import { postNewMessage } from "../../utils/api-interceptor"
import { IMessage } from "../../@types"
import { AuthContext } from "../../context/AuthContext"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { selectChannelById } from "../../store/channelSlice"
import { getReceiverFromChannel } from "../../utils/helpers"
type Props = {
  sendTypingStatus: () => void
  isReceiverTyping: boolean
}
const MessagesContainer = ({ sendTypingStatus, isReceiverTyping }: Props) => {
  const [messageContent, setMessageContent] = useState("")
  const { id } = useParams()
  const { user } = useContext(AuthContext)

  const channel = useSelector((state: RootState) =>
    selectChannelById(state, parseInt(id!))
  )

  const receiver = getReceiverFromChannel(channel, user)
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(id)
    console.log("Sending Message", messageContent)
    if (!id || !messageContent) return
    const channelId = parseInt(id)

    try {
      await postNewMessage(channelId, { messageContent })
      setMessageContent("")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <>
      <MessagesContainerStyle>
        <MessagesContainerHeader />
        <MessagesContainerBody>
          <Message />
          <div>
            <MessageInputField
              messageContent={messageContent}
              setMessageContent={setMessageContent}
              sendMessage={sendMessage}
              sendTypingStatus={sendTypingStatus}
            />
            <MessageTypingStatus>
              {isReceiverTyping ? `${receiver?.firstName} is typing...` : ""}
            </MessageTypingStatus>
          </div>
        </MessagesContainerBody>
      </MessagesContainerStyle>
    </>
  )
}

export default MessagesContainer
