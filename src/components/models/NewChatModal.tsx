import React from "react"
import {
  ModalBody,
  ModalContainer,
  ModalHeader,
  Button,
  InputContainer,
  InputField,
  InputLabel,
  TextAreaField,
} from "../../utils/styles"

import styles from "./index.module.scss"

import { useDispatch } from "react-redux"
import { addChannel, createChannelThunk } from "../../store/channelSlice"
import { useForm } from "react-hook-form"
import { ICreateChannel } from "../../@types/createChannel"
import { AppDispatch } from "../../store"

type Props = {
  setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const NewChatModal = ({ setIsModelOpen }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICreateChannel>({})
  const dispatch = useDispatch<AppDispatch>()

  const onSubmit = (data: ICreateChannel) => {
    dispatch(createChannelThunk(data))
      .then((data) => {
        setIsModelOpen(false)
      })
      .catch((err) => console.log(err))
  }
  return (
    <ModalContainer>
      <ModalHeader>
        <h1 className={styles.modelTitle}>Create a conversation</h1>
      </ModalHeader>
      <ModalBody>
        <form className={styles.modelForm} onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <InputLabel htmlFor="username">Type the Email</InputLabel>
            <InputField
              id="username"
              type="text"
              {...register("email", { required: "Email is required" })}
            />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="message">Message</InputLabel>
            <TextAreaField
              id="message"
              {...register("message", { required: "Message is required" })}
            />
          </InputContainer>
          <Button>Start Conversation</Button>
        </form>
      </ModalBody>
    </ModalContainer>
  )
}

export default NewChatModal
