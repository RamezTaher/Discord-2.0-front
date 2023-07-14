import React, { Dispatch, FC, SetStateAction } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { AppDispatch } from "../../store"

import { IMessage } from "../../@types"
import { EditMessageActionsContainer, EditMessageInputField } from "."
import { editMessageThunk } from "../../store/messageSlice"
import { IEditMessage } from "../../@types/editMessage"

type Props = {
  selectedEditMessage: IMessage
  onEditMessageChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  setIsEditing: Dispatch<SetStateAction<boolean>>
}
export const EditMessage: FC<Props> = ({
  selectedEditMessage,
  onEditMessageChange,
  setIsEditing,
}) => {
  const dispatch = useDispatch<AppDispatch>()
  const { id } = useParams()
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(selectedEditMessage)
    console.log("Submitting Edit")
    const params: IEditMessage = {
      channelId: parseInt(id!),
      messageId: selectedEditMessage.id,
      messageContent: selectedEditMessage.messageContent,
    }
    dispatch(editMessageThunk(params))
      .then(() => {
        setIsEditing(false)
      })
      .catch((err) => {
        console.log(err)
        setIsEditing(false)
      })
  }
  return (
    <div style={{ width: "100%" }}>
      <form onSubmit={onSubmit}>
        <EditMessageInputField
          value={selectedEditMessage.messageContent}
          onChange={onEditMessageChange}
        />
      </form>
      <EditMessageActionsContainer>
        <div>
          escape to <span>cancel</span> - enter to <span>save</span>
        </div>
      </EditMessageActionsContainer>
    </div>
  )
}
