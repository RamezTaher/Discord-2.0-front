import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IChannelMessages, IMessage } from "../@types"
import {
  deleteMessage as deleteMessageAPI,
  editMessage as editMessageAPI,
  getChannelMessages,
} from "../utils/api-interceptor"
import { ISendMessage } from "../@types/sendMessage"
import { IDeleteMessage } from "../@types/deleteMessage"
import { IEditMessage } from "../@types/editMessage"

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

export const editMessageThunk = createAsyncThunk(
  "messages/edit",
  (params: IEditMessage) => {
    return editMessageAPI(params)
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

    editMessage: (state, action: PayloadAction<IMessage>) => {
      console.log("editMessageReducer")
      const message = action.payload
      const channelMessages = state.messages.find(
        (cm) => cm.id === message.channel.id
      )
      if (!channelMessages) return
      const messageIndex = channelMessages.messages.findIndex(
        (m) => m.id === message.id
      )
      channelMessages.messages[messageIndex] = message
    },
  },
  extraReducers: (builder) => {
    builder
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
      .addCase(deleteMessageThunk.fulfilled, (state, action) => {
        const { data } = action.payload
        const channelMessages = state.messages.find(
          (cm) => cm.id === data.conversationId
        )
        if (!channelMessages) return
        const messageIndex = channelMessages.messages.findIndex(
          (m) => m.id === data.messageId
        )
        channelMessages?.messages.splice(messageIndex, 1)
      })
      .addCase(editMessageThunk.fulfilled, (state, action) => {
        console.log("editMessageThunk.fulfilled")
        const { data: message } = action.payload
        const { id } = message.channel
        const channelMessages = state.messages.find((cm) => cm.id === id)
        if (!channelMessages) return
        const messageIndex = channelMessages.messages.findIndex(
          (m) => m.id === message.id
        )
        console.log(messageIndex)
        channelMessages.messages[messageIndex] = message
        console.log("Updated Message")
      })
  },
})

export const { addMessage, deleteMessage, editMessage } = messagesSlice.actions

export default messagesSlice.reducer
