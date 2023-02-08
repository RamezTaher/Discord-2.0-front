import React, { useContext, useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { IUser } from "../@types"
import { IMessage } from "../@types/message"
import MessagesContainer from "../components/messages/MessagesContainer"
import { AuthContext } from "../context/AuthContext"
import { getChannelMessages } from "../utils/api-interceptor"
import { ChannelStyle } from "../utils/styles"

const Channel = () => {
  const { user } = useContext(AuthContext)
  const { id } = useParams()
  const [messages, setMessages] = useState<IMessage[]>([])


  useEffect(() => {
    const channelId = parseInt(id!)
    console.log("channelid",channelId)
    getChannelMessages(channelId)
      .then(({ data }) => {
        console.log("data from fetch api", data)
        setMessages(data.messages)
      })
      .catch((err) => console.log(err))
  }, [id])
  return (
    <ChannelStyle>
      <MessagesContainer messages={messages} />
    </ChannelStyle>
  )
}

export default Channel
