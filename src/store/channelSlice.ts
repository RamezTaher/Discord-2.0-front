import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IChannel, IChannelMessages, IMessage } from "../@types"
import { createNewConversation, getChannels } from "../utils/api-interceptor"
import { getChannelMessages } from "../utils/api-interceptor"
import { ICreateChannel } from "../@types/createChannel"

export interface ChannelsState {
  channels: IChannel[]
  loading: boolean
}

const initialState: ChannelsState = {
  channels: [],
  loading: false,
}

export const fetchChannelsThunk = createAsyncThunk(
  "channels/fetch",
  async () => {
    return getChannels()
  }
)

export const createChannelThunk = createAsyncThunk(
  "conversations/create",
  async (data: ICreateChannel) => {
    return createNewConversation(data)
  }
)

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addChannel: (state, action: PayloadAction<IChannel>) => {
      console.log("Add Channel")
    },

    updateChannel: (state, action: PayloadAction<IChannel>) => {
      console.log("Inside updateConversation")
      const channel = action.payload
      const index = state.channels.findIndex((c) => c.id === channel.id)
      state.channels.splice(index, 1)
      state.channels.unshift(channel)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchChannelsThunk.fulfilled, (state, action) => {
        state.channels = action.payload.data
        state.loading = false
      })
      .addCase(fetchChannelsThunk.pending, (state, action) => {
        state.loading = true
      })
      .addCase(createChannelThunk.fulfilled, (state, action) => {
        console.log(action.payload.data)
        state.channels.unshift(action.payload.data)
      })
  },
})

// Action creators are generated for each case reducer function
export const { addChannel, updateChannel } = channelsSlice.actions

export default channelsSlice.reducer
