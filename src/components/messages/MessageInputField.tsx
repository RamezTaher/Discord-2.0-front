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
  const updateMessageContent = (e: React.ChangeEvent<HTMLInputElement>) =>
    setMessageContent(e.target.value)
  return (
    <MessageInputContainer>
      <form onSubmit={sendMessage}>
        <MessageInput
          value={messageContent}
          onChange={updateMessageContent}
          onKeyDown={sendTypingStatus}
        />
      </form>
    </MessageInputContainer>
  )
}
