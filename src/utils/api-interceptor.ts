import axios, { AxiosRequestConfig } from "axios"
import {
  IChannel,
  IChannelMessages,
  ICreateUser,
  ILogUser,
  IUser,
} from "../@types"
import { ISendMessage } from "../@types/sendMessage"
import { ICreateMessage } from "../@types/createMessage"
import { ICreateChannel } from "../@types/createChannel"

const API_URL = import.meta.env.VITE_API_BASE_URL

const api = axios.create({ baseURL: API_URL })
const config: AxiosRequestConfig = { withCredentials: true }

// Auth
export const postRegisterUser = (data: ICreateUser) =>
  api.post(`/auth/register`, data, config)

export const postLogUser = (data: ILogUser) =>
  api.post(`/auth/login`, data, config)

export const getAuth = () => api.get<IUser>(`/auth/me`, config)

// Channels

export const getChannels = () =>
  axios.get<IChannel[]>(`${API_URL}/channels`, config)

export const getChannelMessages = (id: number) =>
  axios.get<IChannelMessages>(`${API_URL}/messages/${id}`, config)

export const createNewConversation = (data: ICreateChannel) =>
  axios.post<IChannel>(`${API_URL}/channels`, data, config)

// Messages

export const postNewMessage = (data: ICreateMessage) =>
  axios.post(`${API_URL}/messages`, data, config)
