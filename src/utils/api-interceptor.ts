import axios, { AxiosRequestConfig } from "axios"

const API_URL = process.env.REACT_APP_API_URL
const axiosClient = axios.create({ baseURL: API_URL })
const config: AxiosRequestConfig = { withCredentials: true }

export const postRegisterUser = (data: any) =>
  axiosClient.post(`/auth/register`, data, config)
