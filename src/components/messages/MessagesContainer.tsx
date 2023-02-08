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
  console.log("container", messages)
  return (
    <>
      <MessagesContainerStyle>
        <MessagesContainerBody>
          <Message messages={messages} />
          <MessageInputField />
        </MessagesContainerBody>
      </MessagesContainerStyle>
    </>
  )
}

export default MessagesContainer
