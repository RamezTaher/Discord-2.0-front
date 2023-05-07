import { Dispatch, SetStateAction } from "react"
import { MessageInput, MessageInputContainer } from "."

type Props = {
  messageContent: string
  setMessageContent: Dispatch<SetStateAction<string>>
  sendMessage: (e: React.FormEvent<HTMLFormElement>) => void
  sendTypingStatus: () => void
}
export const MessageInputField = ({
  messageContent,
  setMessageContent,
  sendMessage,
  sendTypingStatus,
}: Props) => {
  return (
    <MessageInputContainer>
      <form onSubmit={sendMessage}>
        <MessageInput
          value={messageContent}
          onChange={(e) => setMessageContent(e.target.value)}
          onKeyDown={sendTypingStatus}
        />
      </form>
    </MessageInputContainer>
  )
}
