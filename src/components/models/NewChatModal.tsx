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

const NewChatModal = () => {
  return (
    <ModalContainer>
      <ModalHeader>
        <h1 className={styles.modelTitle}>Create a conversation</h1>
      </ModalHeader>
      <ModalBody>
        <form className={styles.modelForm}>
          <InputContainer>
            <InputLabel htmlFor="username">Type the username</InputLabel>
            <InputField id="username" type="text" />
          </InputContainer>
          <InputContainer>
            <InputLabel htmlFor="message">Message</InputLabel>
            <TextAreaField id="message" />
          </InputContainer>
          <Button>Start Conversation</Button>
        </form>
      </ModalBody>
    </ModalContainer>
  )
}

export default NewChatModal
