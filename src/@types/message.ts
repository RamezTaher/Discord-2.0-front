import { IUser } from "./user"

export interface IMessage {
  id: number
  sender: IUser
  messageContent: string
  createdAt: string
}
