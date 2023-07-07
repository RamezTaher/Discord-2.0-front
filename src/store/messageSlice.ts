import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IChannelMessages } from "../@types"
import {
  deleteMessage as deleteMessageAPI,
  getChannelMessages,
} from "../utils/api-interceptor"
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
    return deleteMessageAPI(params)
  }
)

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<ISendMessage>) => {
      const { channel, message } = action.payload
      const channelMessages = state.messages.find((cm) => cm.id === channel.id)
      channelMessages?.messages.unshift(message)
    },
    deleteMessage: (state, action: PayloadAction<IDeleteMessage>) => {
      console.log("Inside deleteMessage reducer")
      const { payload } = action
      const channelMessages = state.messages.find(
        (cm) => cm.id === payload.channelId
      )
      if (!channelMessages) return
      const messageIndex = channelMessages.messages.findIndex(
        (m) => m.id === payload.messageId
      )
      channelMessages.messages.splice(messageIndex, 1)
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

export const { addMessage, deleteMessage } = messagesSlice.actions

export default messagesSlice.reducer
