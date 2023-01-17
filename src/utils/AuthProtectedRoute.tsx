import React from "react"
import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const AuthProtectedRoute = ({ children, ...rest }) => {
  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  return userInfo && userInfo._id ? <Outlet /> : <Navigate to="/login" />
}

export default AuthProtectedRoute
