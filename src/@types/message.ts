import { IUser } from "./user"

export interface IMessage {
  id: number
  sender: IUser
  messageContent: string
  sentAt: string
}