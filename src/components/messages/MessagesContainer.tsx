import React from "react"
import { MessagesContainerBody, MessagesContainerStyle } from "."
import { IMessage } from "../../@types"
import Message from "./Message"
import { MessageInputField } from "./MessageInputField"
import MessagesContainerHeader from "./MessagesContainerHeader"

type Props = {
  messages: IMessage[]
}
const MessagesContainer = ({ messages }: Props) => {
  return (
    <>
      <MessagesContainerStyle>
        <MessagesContainerHeader />
        <MessagesContainerBody>
          <Message messages={messages} />
          <MessageInputField />
        </MessagesContainerBody>
      </MessagesContainerStyle>
    </>
  )
}

export default MessagesContainer
