import React from "react"
import { useForm } from "react-hook-form"
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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const submitHundler = () => {
    console.log("hello from register")
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHundler)}>
      <FormTitle>Welcome back!</FormTitle>
      <InputContainer>
        <InputLabel htmlFor="username">Email OR Username</InputLabel>
        <InputField
          id="username"
          type="text"
          {...register("username", {
            required: "Username or Email is required",
          })}
        />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField
          id="password"
          type="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
      </InputContainer>
      <Button>Log In</Button>
      <Link to="/register" className={styles.exitedUser}>
        Need an account? Register
      </Link>
    </form>
  )
}

export default LoginForm
