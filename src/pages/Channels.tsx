import { Outlet, useParams } from "react-router-dom"
import { useDispatch } from "react-redux"
import { Page } from "../utils/styles"

import ChatSidebar from "../components/channel/ChatSidebar"
import ChatDefault from "../components/channel/ChatDefault"
import { useEffect, useState } from "react"
import { IChannel } from "../@types"
import { AppDispatch } from "../store"
import { fetchChannelsThunk } from "../store/channelSlice"
const Channels = () => {
  const { id } = useParams()
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchChannelsThunk())
  }, [])
  return (
    <Page>
      <ChatSidebar />
      {!id && <ChatDefault />}
      <Outlet />
    </Page>
  )
}

export default Channels
