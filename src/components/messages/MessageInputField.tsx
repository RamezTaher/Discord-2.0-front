import { Dispatch, SetStateAction } from "react"
import { MessageInput, MessageInputContainer } from "."

type Props = {
  messageContent: string
  setContent: Dispatch<SetStateAction<string>>
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void
}
export const MessageInputField = ({
  messageContent,
  setContent,
  sendMessage,
}: Props) => {
  return (
    <MessageInputContainer>
      <form onSubmit={sendMessage}>
        <MessageInput
          value={messageContent}
          onChange={(e) => setContent(e.target.value)}
        />
      </form>
    </MessageInputContainer>
  )
}
