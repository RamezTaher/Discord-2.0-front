import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { Link, useNavigate } from "react-router-dom"
import { ILogUser } from "../../utils/@types"
import { postLogUser } from "../../utils/api-interceptor"
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
  } = useForm<ILogUser>()
  const navigate = useNavigate()

  // const [loading, setLoading] = useState(false)

  const submitHundler = async (data: ILogUser) => {
    console.log(data)
    try {
      const user = await postLogUser(data)
      console.log(user)
      navigate("/channels")
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className={styles.authForm} onSubmit={handleSubmit(submitHundler)}>
      <FormTitle>Welcome back!</FormTitle>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
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
