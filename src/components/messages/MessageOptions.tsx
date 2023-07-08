import { FC, useContext } from "react"
import { useDispatch } from "react-redux"
import { useParams } from "react-router-dom"
import { AppDispatch } from "../../store"
import { AuthContext } from "../../context/AuthContext"
import { MessageOptionsContext } from "../../context/MessageOptionsContext"
import { MessageOptionsStyle } from "."
import { deleteMessageThunk } from "../../store/messageSlice"

type Props = {
  points: { x: number; y: number }
}

export const MessageOptions: FC<Props> = ({ points }) => {
  const { message } = useContext(MessageOptionsContext)
  const { id } = useParams()
  const { user } = useContext(AuthContext)
  const dispatch = useDispatch<AppDispatch>()

  const deleteMessage = () => {
    const channelId = parseInt(id!)
    console.log(`Delete message ${message?.id}`)
    if (!message) return
    dispatch(deleteMessageThunk({ channelId, messageId: message.id }))
  }
  return (
    <>
      {message?.sender.id === user?.id && (
        <MessageOptionsStyle top={points.y} left={points.x}>
          <ul>
            <li onClick={deleteMessage}>Delete</li>
            <li>Edit</li>
          </ul>
        </MessageOptionsStyle>
      )}
    </>
  )
}
