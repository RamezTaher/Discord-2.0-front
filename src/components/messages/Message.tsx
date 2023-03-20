import { useContext, useEffect } from "react"
import {
  MessageContainerStyle,
  MessageItemContainer,
  MessageItemContent,
} from "."
import { IMessage } from "../../@types/message"
import { AuthContext } from "../../context/AuthContext"
import FormattedMessage from "./FormattedMessage"

type Props = {
  messages: IMessage[]
}
const Message = ({ messages }: Props) => {
  const { user } = useContext(AuthContext)
  console.log(messages)

  const formatMessages = () => {
    return messages.map((message, idx, messagesArray) => {
      const nextMessageIdx = idx + 1
      const currentMessage = messagesArray[idx]
      const nextMessage = messagesArray[nextMessageIdx]
      if (messagesArray.length === idx + 1) {
        // last msg
        return <FormattedMessage user={user} message={message} />
      }
      if (currentMessage.sender.id === nextMessage.sender.id) {
        return (
          <MessageItemContainer>
            <MessageItemContent padding="0 0 0 70px">
              {message.messageContent}
            </MessageItemContent>
          </MessageItemContainer>
        )
      }
      return <FormattedMessage user={user} message={message} />
    })
  }

  useEffect(() => {
    formatMessages()
    console.log(messages)
  }, [])
  return <MessageContainerStyle>{formatMessages()}</MessageContainerStyle>
}

export default Message
