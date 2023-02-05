import { Outlet, useParams } from "react-router-dom"

import { Page } from "../utils/styles"

import ChatSidebar from "../components/Chat/ChatSidebar"
import ChatDefault from "../components/Chat/ChatDefault"
import { useEffect, useState } from "react"
import { IChannel } from "../@types"
import { getChannels } from "../utils/api-interceptor"

const Channels = () => {
  const { id } = useParams()

  const [channels, setChannels] = useState<IChannel[]>([])

  useEffect(() => {
    getChannels()
      .then(({ data }) => {
        setChannels(data)
        console.log(data)
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
