import { IChannel, IUser } from "../@types"

export const getReceiverFromChannel = (channel?: IChannel, user?: IUser) => {
  return user?.id === channel?.sender.id ? channel?.receiver : channel?.sender
}
