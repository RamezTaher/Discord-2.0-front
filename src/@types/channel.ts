import { IUser } from "./user"

export interface IChannel {
  id: number
  sender: IUser
  receiver: IUser
}
