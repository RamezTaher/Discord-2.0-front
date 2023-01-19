import axios, { AxiosRequestConfig } from "axios"
import { ICreateUser, ILogUser, IUser } from "./@types"

const API_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({ baseURL: API_URL })
const config: AxiosRequestConfig = { withCredentials: true }

export const postRegisterUser = (data: ICreateUser) =>
  api.post(`/auth/register`, data, config)

export const postLogUser = (data: ILogUser) =>
  api.post(`/auth/login`, data, config)

export const getAuth = () => api.get<IUser>(`/auth/me`, config)
