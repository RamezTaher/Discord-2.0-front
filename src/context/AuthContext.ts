import { createContext } from "react"
import { IUser } from "../@types"

type AuthContextType = {
  updateAuthUser: (user: IUser) => void
  user?: IUser
}

export const AuthContext = createContext<AuthContextType>({
  updateAuthUser: () => {},
})
