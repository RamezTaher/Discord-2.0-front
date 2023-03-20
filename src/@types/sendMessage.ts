import { IChannel } from "./channel"
import { IUser } from "./user"

export type ISendMessage = {
  id: number
  sentAt: string
  channel: IChannel
  sender: IUser
  messageContent: string
}
