import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IChannel, IMessage } from "../@types"
import { getChannels } from "../utils/api-interceptor"
import { getChannelMessages } from "../utils/api-interceptor"

export interface ChannelsState {
  channels: IChannel[]
  messages: IMessage[]
  loading: boolean
}

const initialState: ChannelsState = {
  channels: [],
  messages: [],
  loading: false,
}

export const fetchChannelsThunk = createAsyncThunk(
  "channels/fetch",
  async () => {
    return getChannels()
  }
)

export const fetchMessagesThunk = createAsyncThunk(
  "messages/fetch",
  async (id: number) => {
    return getChannelMessages(id)
  }
)

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addChannel: (state, action: PayloadAction<IChannel>) => {
      console.log("Add Channel")
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
      .addCase(fetchMessagesThunk.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchMessagesThunk.fulfilled, (state, action) => {
        const { id, messages } = action.payload.data
        const index = state.messages.findIndex((cm) => cm.id === id)
        const exists = state.messages.find((cm) => cm.id === id)
        if (exists) {
          console.log("exists")
          state.messages[index] = action.payload.data
        } else {
          state.messages.push(action.payload.data)
        }
      })
      .addCase(fetchMessagesThunk.rejected, (state) => {
        state.loading = false
      })
  },
})

// Action creators are generated for each case reducer function
export const { addChannel } = channelsSlice.actions

export default channelsSlice.reducer
