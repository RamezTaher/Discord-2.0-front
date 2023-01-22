import { type } from "os"
import React from "react"
import { ModalBody, ModalContainer, ModalHeader } from "../../utils/styles"

type Props = {
  children: React.ReactNode
}
const NewChatModal = ({ children }: Props) => {
  return (
    <ModalContainer>
      <ModalHeader>
        <h1>Select Friends</h1>
      </ModalHeader>
      <ModalBody></ModalBody>
    </ModalContainer>
  )
}

export default NewChatModal
