export type ICreateUser = {
  email: string
  firstName: string
  lastName: string
  userName: string
  password: string
}

export type ILogUser = {
  email: string
  password: string
}
export type IUser = {
  id: number
  email: string
  firstName: string
  lastName: string
  userName: string
}
