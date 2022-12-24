import React from "react"
import RegisterForm from "../components/forms/RegisterForm"
import { Page } from "../utils/styles"

const Register = () => {
  return (
    <Page
      display="flex"
      justifyContent="center"
      alignItems="center"
      backgoundColor="#5865f2"
    >
      <RegisterForm />
    </Page>
  )
}

export default Register
