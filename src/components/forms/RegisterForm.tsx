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

const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("hello from register")
  }
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <FormTitle>Create an account</FormTitle>
      <InputContainer>
        <InputLabel htmlFor="email">Email</InputLabel>
        <InputField id="email" type="email" />
      </InputContainer>
      <section className={styles.nameSection}>
        <InputContainer>
          <InputLabel htmlFor="firstname">First Name</InputLabel>
          <InputField id="firstname" type="text" />
        </InputContainer>
        <InputContainer>
          <InputLabel htmlFor="lastname">Last Name</InputLabel>
          <InputField id="lastname" type="text" />
        </InputContainer>
      </section>
      <InputContainer>
        <InputLabel htmlFor="username">Username</InputLabel>
        <InputField id="username" type="text" />
      </InputContainer>

      <InputContainer>
        <InputLabel htmlFor="password">Password</InputLabel>
        <InputField id="password" type="password" />
      </InputContainer>
      <Button>Continue</Button>
      <Link to="/login" className={styles.exitedUser}>
        Already have an account?
      </Link>
    </form>
  )
}

export default RegisterForm
