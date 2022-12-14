import React from "react"
import { Link } from "react-router-dom"
import {
  InputField,
  InputContainer,
  InputLabel,
  Button,
  FormTitle,
} from "../../utils/styles"
import styles from "./index.module.scss"

const LoginForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("hello from register")
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormTitle>Welcome back!</FormTitle>
      <InputContainer>
        <InputLabel htmlFor="username">Email OR Username</InputLabel>
        <InputField id="username" type="text" />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="password" />
      </InputContainer>
      <Button>Log In</Button>
      <Link to="/register" className={styles.exitedUser}>
        Need an account? Register
      </Link>
    </form>
  )
}

export default LoginForm
