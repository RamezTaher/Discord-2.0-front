import { useRef } from "react"
import { Overlay } from "../../utils/styles"
import NewChatModal from "../models/NewChatModal"

type Props = {
  setIsModelOpen: React.Dispatch<React.SetStateAction<boolean>>
}
const ChatNew = ({ setIsModelOpen }: Props) => {
  const overlayRef = useRef<HTMLDivElement>(null)
  const closeModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { current } = overlayRef
    if (current === event.target) {
      setIsModelOpen(false)
    }
  }
  return (
    <>
      <Overlay ref={overlayRef} onClick={closeModal}>
        <NewChatModal setIsModelOpen={setIsModelOpen} />
      </Overlay>
    </>
  )
}

export default ChatNew
