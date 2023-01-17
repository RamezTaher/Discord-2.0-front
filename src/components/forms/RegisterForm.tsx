import React from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { ICreateUser } from "../../utils/@types"
import { postRegisterUser } from "../../utils/api-interceptor"
import {
  InputField,
  InputContainer,
  InputLabel,
  Button,
  FormTitle,
} from "../../utils/styles"
import styles from "./index.module.scss"

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateUser>()

  const submitHundler = async (data: ICreateUser) => {
    console.log(data)
    try {
      await postRegisterUser(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit(submitHundler)}>
      <FormTitle>Create an account</FormTitle>
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
      <section className={styles.nameSection}>
        <InputContainer>
          <InputLabel htmlFor="firstname">First Name</InputLabel>
          <InputField
            id="firstname"
            type="text"
            {...register("firstName", {
              required: "First Name is required",
            })}
          />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>
          <InputField
            id="lastname"
            type="text"
            {...register("lastName", {
              required: "Last Name is required",
            })}
          />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="username">Username</InputLabel>
        <InputField
          id="username"
          type="text"
          {...register("userName", {
            required: "Username is required",
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
      <Button>Continue</Button>
      <Link to="/login" className={styles.exitedUser}>
        Already have an account?
      </Link>
    </form>
  )
}

export default RegisterForm
