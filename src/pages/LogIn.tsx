import React from "react"
import LoginForm from "../components/forms/LoginForm"
import { Page } from "../utils/styles"

const LogIn = () => {
  return (
    <Page
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgoundColor="#5865f2"
    >
      <LoginForm />
    </Page>
  )
}

export default LogIn
