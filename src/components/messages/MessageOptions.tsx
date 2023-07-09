import { Dispatch, FC, SetStateAction, useContext } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { AppDispatch } from "../../store"
import { AuthContext } from "../../context/AuthContext"
import { MessageOptionsContext } from "../../context/MessageOptionsContext"
import { MessageOptionsStyle } from "."
import { deleteMessageThunk } from "../../store/messageSlice"

type Props = {
  points: { x: number; y: number }
  setIsEditing: Dispatch<SetStateAction<boolean>>
}

export const MessageOptions: FC<Props> = ({ points, setIsEditing }) => {
  const { message, setEditMessage } = useContext(MessageOptionsContext)
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const dispatch = useDispatch<AppDispatch>()

  const editMessage = () => {
    setIsEditing(true)
    setEditMessage(message)
  }

  const deleteMessage = () => {
    const channelId = parseInt(id!)
    if (!message) return
    dispatch(deleteMessageThunk({ channelId, messageId: message.id }))
  }
  return (
    <>
      {message?.sender.id === user?.id && (
        <MessageOptionsStyle top={points.y} left={points.x}>
          <ul>
            <li onClick={deleteMessage}>Delete</li>
            <li onClick={editMessage}>Edit</li>
          </ul>
        </MessageOptionsStyle>
      )}
    </>
  )
}
