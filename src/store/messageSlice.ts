import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IChannelMessages } from "../@types"
import { deleteMessage, getChannelMessages } from "../utils/api-interceptor"
import { ISendMessage } from "../@types/sendMessage"
import { IDeleteMessage } from "../@types/deleteMessage"

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

export const deleteMessageThunk = createAsyncThunk(
  "messages/delete",
  (params: IDeleteMessage) => {
    return deleteMessage(params)
  }
)

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ISendMessage>) => {
      console.log(state)
      console.log(action)
      const { channel, message } = action.payload
      const channelMessages = state.messages.find((cm) => cm.id === channel.id)
      channelMessages?.messages.unshift(message)
    },
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
