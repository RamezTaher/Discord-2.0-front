import React, { useState } from "react"
import { MessagesContainerBody, MessagesContainerStyle } from "."
import Message from "./Message"
import { MessageInputField } from "./MessageInputField"
import MessagesContainerHeader from "./MessagesContainerHeader"
import { useParams } from "react-router-dom"
import { postNewMessage } from "../../utils/api-interceptor"
import { IMessage } from "../../@types"

const MessagesContainer = () => {
  const [messageContent, setMessageContent] = useState("")
  const { id } = useParams()
  const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(id)
    console.log("Sending Message", messageContent)
    if (!id || !messageContent) return
    const channelId = parseInt(id)

    try {
      await postNewMessage({ channelId, messageContent })
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
          <MessageInputField
            messageContent={messageContent}
            setMessageContent={setMessageContent}
            sendMessage={sendMessage}
          />
        </MessagesContainerBody>
      </MessagesContainerStyle>
    </>
  )
}

export default MessagesContainer
