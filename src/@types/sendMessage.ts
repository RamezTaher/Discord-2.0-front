import { IChannel } from "./channel"
import { IMessage } from "./message"

export type ISendMessage = {
  channel: IChannel
  message: IMessage
}
