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
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../store"
import { fetchMessagesThunk } from "../store/channelSlice"

const Channel = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [messages, setMessages] = useState<IMessage[]>([])
  const socket = useContext(SocketContext)
  const channels = useSelector((state: RootState) => state.channel.channels)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    const channelId = parseInt(id!)
    dispatch(fetchMessagesThunk(channelId))
  }, [id])

  useEffect(() => {
    socket.on("connected", () => console.log("Connected"))
    socket.on("onMessage", (payload: ISendMessage) => {
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
