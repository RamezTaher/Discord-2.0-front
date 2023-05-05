import { Dispatch, SetStateAction } from "react"
import { MessageInput, MessageInputContainer } from "."

type Props = {
  messageContent: string
  setMessageContent: Dispatch<SetStateAction<string>>
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void
}
export const MessageInputField = ({
  messageContent,
  setMessageContent,
  sendMessage,
}: Props) => {
  return (
    <MessageInputContainer>
      <form onSubmit={sendMessage}>
        <MessageInput
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
        />
      </form>
    </MessageInputContainer>
  )
}
