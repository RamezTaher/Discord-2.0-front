import { useContext, useEffect } from "react"
import { IMessage } from "../../@types/message"
import { AuthContext } from "../../context/AuthContext"

type Props = {
  messages: IMessage[]
}
const Message = ({ messages }: Props) => {
  const { user } = useContext(AuthContext)

  const formatMessages = () => {
    return messages.map((message, idx, messagesArray) => {
      console.log(idx)
      const currentMessage = messagesArray[idx]
      const nextMessage = messagesArray[idx + 1]
      console.log(currentMessage)
      console.log(nextMessage)
      if (messagesArray.length === idx + 1) {
        console.log("At the end")
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
  })
  return <MessageContainerStyle>{formatMessages()}</MessageContainerStyle>
}

export default Message
