import { Outlet, useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Page } from "../utils/styles"

import ChatSidebar from "../components/channel/ChatSidebar"
import ChatDefault from "../components/channel/ChatDefault"
import { useEffect, useState, useContext } from "react"
import { IChannel } from "../@types"
import { AppDispatch, RootState } from "../store"
import {
  addChannel,
  fetchChannelsThunk,
  updateChannel,
} from "../store/channelSlice"
import { SocketContext } from "../context/SocketContext"
import { ISendMessage } from "../@types/sendMessage"
import { addMessage, deleteMessage } from "../store/messageSlice"
const Channels = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()
  const channelsState = useSelector(
    (state: RootState) => state.channel.channels
  )

  const socket = useContext(SocketContext)

  useEffect(() => {
    dispatch(fetchChannelsThunk())
  }, [])

  useEffect(() => {
    socket.on("onMessage", (payload: ISendMessage) => {
      const { channel, message } = payload
      dispatch(addMessage(payload))
      dispatch(updateChannel(channel))
    })
    socket.on("onMessageDelete", (payload) => {
      console.log("Message Deleted")
      console.log(payload)
      dispatch(deleteMessage(payload))
    })
    socket.on("onConversation", (payload: IChannel) => {
      console.log("Received onConversation Event")
      console.log(payload)
      dispatch(addChannel(payload))
    })

    return () => {
      socket.off("onMessage")
      socket.off("onConversation")
      socket.off("onMessageDelete")
    }
  }, [id])
  return (
    <Page>
      <ChatSidebar />
      {!id && <ChatDefault />}
      <Outlet />
    </Page>
  )
}

export default Channels
