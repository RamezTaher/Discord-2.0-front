import { IUser } from "./user"
import { IMessage } from "./message"

export interface IChannel {
  id: number
  sender: IUser
  receiver: IUser
  lastMessageSent: IMessage
  createdAt: Date;
}
