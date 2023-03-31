import { Outlet, useParams } from "react-router-dom"

import { Page } from "../utils/styles"

import ChatSidebar from "../components/channel/ChatSidebar"
import ChatDefault from "../components/channel/ChatDefault"
import { useEffect, useState } from "react"
import { IChannel } from "../@types"
import { getChannels } from "../utils/api-interceptor"
import MessagesContainer from "../components/messages/MessagesContainer"

const Channels = () => {
  const { id } = useParams()

  const [channels, setChannels] = useState<IChannel[]>([])

  useEffect(() => {
    getChannels()
      .then(({ data }) => {
        setChannels(data)
      })
      .catch((err) => console.log(err))
  }, [])
  return (
    <Page>
      <ChatSidebar channels={channels} />
      {!id && <ChatDefault />}

      <Outlet />
    </Page>
  )
}

export default Channels
