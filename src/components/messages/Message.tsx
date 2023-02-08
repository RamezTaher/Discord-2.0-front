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

  const arr = [
    {
      id: 17,
      messageContent: "Hey Raùez",
      sentAt: "2023-02-04T23:48:13.087Z",
      sender: {
        id: 2,
        userName: "ramez1",
        email: "ramez1@gmail.com",
        firstName: "Ramez",
        lastName: "Ben Taher",
        password:
          "$2b$10$lQNqPLmIm90NS7Mquo/FJeZrFwCYetVJmc98PwgXL/e9wU.L6.GTu",
      },
    },
    {
      id: 16,
      messageContent: "Hey ",
      sentAt: "2023-02-04T23:26:49.296Z",
      sender: {
        id: 2,
        userName: "ramez1",
        email: "ramez1@gmail.com",
        firstName: "Ramez",
        lastName: "Ben Taher",
        password:
          "$2b$10$lQNqPLmIm90NS7Mquo/FJeZrFwCYetVJmc98PwgXL/e9wU.L6.GTu",
      },
    },
    {
      id: 15,
      messageContent: "Hey ",
      sentAt: "2023-02-04T22:56:29.697Z",
      sender: {
        id: 2,
        userName: "ramez1",
        email: "ramez1@gmail.com",
        firstName: "Ramez",
        lastName: "Ben Taher",
        password:
          "$2b$10$lQNqPLmIm90NS7Mquo/FJeZrFwCYetVJmc98PwgXL/e9wU.L6.GTu",
      },
    },
    {
      id: 14,
      messageContent: "Hey Ramez",
      sentAt: "2023-02-04T22:54:46.054Z",
      sender: {
        id: 2,
        userName: "ramez1",
        email: "ramez1@gmail.com",
        firstName: "Ramez",
        lastName: "Ben Taher",
        password:
          "$2b$10$lQNqPLmIm90NS7Mquo/FJeZrFwCYetVJmc98PwgXL/e9wU.L6.GTu",
      },
    },
    {
      id: 13,
      messageContent: "Hey Thereeeeee",
      sentAt: "2023-02-04T22:52:01.494Z",
      sender: {
        id: 2,
        userName: "ramez1",
        email: "ramez1@gmail.com",
        firstName: "Ramez",
        lastName: "Ben Taher",
        password:
          "$2b$10$lQNqPLmIm90NS7Mquo/FJeZrFwCYetVJmc98PwgXL/e9wU.L6.GTu",
      },
    },
    {
      id: 12,
      messageContent: "Hey Thereeeeee",
      sentAt: "2023-02-04T22:50:01.515Z",
      sender: {
        id: 2,
        userName: "ramez1",
        email: "ramez1@gmail.com",
        firstName: "Ramez",
        lastName: "Ben Taher",
        password:
          "$2b$10$lQNqPLmIm90NS7Mquo/FJeZrFwCYetVJmc98PwgXL/e9wU.L6.GTu",
      },
    },
  ]
  const formatMessages = () => {
    return arr.map((message, idx, messagesArray) => {
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
    console.log(messages)
  }, [])
  return <MessageContainerStyle>{formatMessages()}</MessageContainerStyle>
}

export default Message
