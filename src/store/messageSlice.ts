import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IChannelMessages } from "../@types"
import { getChannelMessages } from "../utils/api-interceptor"

export interface MessagesState {
  messages: IChannelMessages[]
  loading: boolean
}

const initialState: MessagesState = {
  messages: [],
  loading: false,
}

export const fetchMessagesThunk = createAsyncThunk(
  "messages/fetch",
  (id: number) => {
    return getChannelMessages(id)
  }
)

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state) => {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMessagesThunk.fulfilled, (state, action) => {
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
  },
})

export const { addMessage } = messagesSlice.actions

export default messagesSlice.reducer
