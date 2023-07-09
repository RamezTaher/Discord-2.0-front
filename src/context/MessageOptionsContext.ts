import { createContext, Dispatch, SetStateAction } from "react"
import { IMessage } from "../@types"

type IMessageOptions = {
  message: IMessage | null
  editMessage: IMessage | null
  setMessage: Dispatch<SetStateAction<IMessage | null>>
  setEditMessage: Dispatch<SetStateAction<IMessage | null>>
}

export const MessageOptionsContext = createContext<IMessageOptions>({
  message: null,
  editMessage: null,
  setMessage: () => {},
  setEditMessage: () => {},
})
