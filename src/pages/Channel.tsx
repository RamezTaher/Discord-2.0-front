import React from "react"
import { useParams } from "react-router-dom"
import { ChannelStyle } from "../utils/styles"

const Channel = () => {
  const { id } = useParams()
  return <ChannelStyle>the Conversation number {id}</ChannelStyle>
}

export default Channel
