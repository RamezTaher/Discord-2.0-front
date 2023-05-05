import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import { IChannel } from "../@types"

export interface ChannelsState {
  channels: IChannel[]
}

const initialState: ChannelsState = {
  channels: [],
}

export const channelsSlice = createSlice({
  name: "channels",
  initialState,
  reducers: {
    addChannel: (state, action: PayloadAction<IChannel>) => {
      console.log("Add Channel")
      state.channels.push(action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { addChannel } = channelsSlice.actions

export default channelsSlice.reducer
