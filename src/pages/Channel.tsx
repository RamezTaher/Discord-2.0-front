import React, { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IUser } from "../@types"
import { IMessage } from "../@types/message"
import { ISendMessage } from "../@types/sendMessage"
import MessagesContainer from "../components/messages/MessagesContainer"
import { AuthContext } from "../context/AuthContext"
import { SocketContext } from "../context/SocketContext"
import { getChannelMessages } from "../utils/api-interceptor"
import { ChannelStyle } from "../utils/styles"

const Channel = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [messages, setMessages] = useState<IMessage[]>([])
  const socket = useContext(SocketContext)

  useEffect(() => {
    const channelId = parseInt(id!)
    getChannelMessages(channelId)
      .then(({ data }) => {
        setMessages(data.messages)
      })
      .catch((err) => console.log(err))
  }, [id])

  useEffect(() => {
    console.log("ramez")
    socket.on("connected", () => console.log("Connected"))
    socket.on("onMessage", (payload: ISendMessage) => {
      console.log("Message Received")
      const { channel, ...messageContent } = payload
      setMessages((prev) => [messageContent, ...prev])
    })
    return () => {
      socket.off("connected")
      socket.off("onMessage")
    }
  }, [])

  return (
    <ChannelStyle>
      <MessagesContainer messages={messages} />
    </ChannelStyle>
  )
}

export default Channel
