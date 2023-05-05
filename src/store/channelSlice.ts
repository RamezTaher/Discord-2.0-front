import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IChannel } from "../@types"
import { getChannels } from "../utils/api-interceptor"

export interface ChannelsState {
  channels: Map<number, IChannel>
}

const initialState: ChannelsState = {
  channels: new Map(),
}

export const fetchChannelsThunk = createAsyncThunk(
  "channels/fetch",
  async () => {
    return getChannels()
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
    builder.addCase(fetchChannelsThunk.fulfilled, (state, action) => {
      action.payload.data.forEach((channel: IChannel) => {
        console.log(channel)
        state.channels.set(channel.id, channel)
      })
      console.log(state.channels)
    })
  },
})

// Action creators are generated for each case reducer function
export const { addChannel } = channelsSlice.actions

export default channelsSlice.reducer
