import React, { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import MessagesContainer from "../components/messages/MessagesContainer"
import { SocketContext } from "../context/SocketContext"
import { ChannelStyle } from "../utils/styles"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../store"
import { fetchMessagesThunk } from "../store/messageSlice"

const Channel = () => {
  const { id } = useParams()
  const socket = useContext(SocketContext)
  const dispatch = useDispatch<AppDispatch>()
  const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>()
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [isReceiverTyping, setIsReceiverTyping] = useState<boolean>(false)

  useEffect(() => {
    const channelId = parseInt(id!)
    dispatch(fetchMessagesThunk(channelId))
  }, [id])

  useEffect(() => {
    const channelId = id!
    socket.emit("onChannelJoin", { channelId })
    socket.on("userJoin", () => {
      console.log("userJoin")
    })
    socket.on("userLeave", () => {
      console.log("userLeave")
    })

    socket.on("onTypingStart", () => {
      setIsReceiverTyping(true)
    })

    socket.on("onTypingStop", () => {
      setIsReceiverTyping(false)
    })

    return () => {
      socket.emit("onChannelLeave", { channelId })
      socket.off("userJoin")
      socket.off("userLeave")
      socket.off("onTypingStart")
      socket.off("onTypingStop")
    }
  }, [id])

  const sendTypingStatus = () => {
    if (isTyping) {
      clearTimeout(timer)
      setTimer(
        setTimeout(() => {
          console.log("User stopped typing")
          socket.emit("onTypingStop", { channelId: id })
          setIsTyping(false)
        }, 700)
      )
    } else {
      setIsTyping(true)
      socket.emit("onTypingStart", { channelId: id })
    }
  }

  return (
    <ChannelStyle>
      <MessagesContainer
        sendTypingStatus={sendTypingStatus}
        isReceiverTyping={isReceiverTyping}
      />
    </ChannelStyle>
  )
}

export default Channel
