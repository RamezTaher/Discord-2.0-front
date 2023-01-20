import React, { useContext } from "react"
import { useParams } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import { ChannelStyle } from "../utils/styles"

const Channel = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  return (
    <ChannelStyle>
      {user?.email} && {user?.userName}
    </ChannelStyle>
  )
}

export default Channel
