import styled from "styled-components"
import { CHAT_SIDEBAR_WIDTH } from "../../utils/styles"
import { MessageItemContentProps } from "./styleTypes"

export const MessagesContainerStyle = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  background-color: #313338;
  &::-webkit-scrollbar {
    display: none;
  }
  position: relative;
`

export const MessagesContainerBody = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 32px;
  box-sizing: border-box;
`

export const MessageContainerStyle = styled.div`
  height: 100%;
  box-sizing: border-box;
  padding: 10px 0;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const MessageInputContainer = styled.div`
  box-sizing: border-box;
  background-color: #383a40;
  border-radius: 5px;
  width: 100%;
  padding: 10px 32px;
`

export const MessageInput = styled.input`
  background-color: inherit;
  outline: none;
  border: none;
  color: #fff;
  font-family: "Inter";
  box-sizing: border-box;
  font-size: 16px;
  width: 100%;
  resize: none;
  padding: 5px 0;
`

export const MessageItemContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 5px 0;
`

export const MessageItemAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ee4343;
`

export const MessageItemDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const MessageItemHeader = styled.div`
  display: flex;
  gap: 12px;
  .time {
    color: #6d6d6d;
    font-size: 14px;
    font-weight: bold;
  }
  .authorName {
    font-weight: 600;
    font-size: 16px;
  }
`

export const MessageItemContent = styled.div<MessageItemContentProps>`
  padding: ${({ padding }) => padding};
`

export const MessagesContainerHeaderStyle = styled.header`
  background-color: #36393f;
  border-bottom: 1px solid #5454543d;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 32px;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  color: #fff;
`
