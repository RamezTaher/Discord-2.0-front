import { configureStore } from "@reduxjs/toolkit"
import channelReducer from "./channelSlice"
import messageReducer from "./messageSlice"

export const store = configureStore({
  reducer: {
    channel: channelReducer,
    messages: messageReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: true,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
