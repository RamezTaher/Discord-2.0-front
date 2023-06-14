import React, { useContext } from "react"
import { MessagesContainerHeaderStyle } from "."
import { AuthContext } from "../../context/AuthContext"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../../store"
import { selectChannelById } from "../../store/channelSlice"

const MessagesContainerHeader = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()

  const channel = useSelector((state: RootState) =>
    selectChannelById(state, parseInt(id!))
  )

  const displayName =
    user?.id === channel?.sender.id
      ? `${channel?.receiver.firstName} ${channel?.receiver.lastName}`
      : `${channel?.sender.firstName} ${channel?.sender.lastName}`
  return (
    <MessagesContainerHeaderStyle>{displayName}</MessagesContainerHeaderStyle>
  )
}

export default MessagesContainerHeader
