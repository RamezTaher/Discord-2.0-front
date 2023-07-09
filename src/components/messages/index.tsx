import styled, { css } from "styled-components"
import { MessageItemContentProps, MessageOptionsProps } from "./styleTypes"

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
  padding: 30px 0 15px;
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
  gap: 5px;
  width: 100%;
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
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  line-height: 1.6;
  position: relative;
`

export const MessagesOptions = styled.div`
  position: absolute;
  height: fit-content;
  top: 50%;
  right: 2px;
  background-color: white;
  padding: 2px 6px;
  transform: translate(-50%, -50%);
  cursor: pointer;
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
  z-index: 5;
`

export const MessageOptionsStyle = styled.div<MessageOptionsProps>`
  border-radius: 8px;
  box-sizing: border-box;
  position: fixed;
  width: 170px;
  color: #fff;
  font-weight: 500;
  background-color: #2f3136;
  box-shadow: 2px 2px 13px 1px rgba(189, 171, 171, 0.75);
  -webkit-box-shadow: 2px 2px 13px 1px rgba(189, 171, 171, 0.75);
  -moz-box-shadow: 2px 2px 13px 1px rgba(189, 171, 171, 0.75);
  ${(props) => css`
    top: ${props.top}px;
    left: ${props.left}px;
  `}
  ul {
    list-style-type: none;
    margin: 0;
    padding: 10px;
  }
  ul li {
    padding: 14px 16px;
    border-radius: 8px;
  }
  ul li:hover {
    cursor: pointer;
    background-color: #383a40;
  }
`

export const MessageTypingStatus = styled.div`
  width: 100%;
  font-size: 15px;
  color: #adadad;
  box-sizing: border-box;
  margin-top: 10px;
  height: 20px;
`

export const EditMessageInputField = styled.input`
  outline: none;
  border: none;
  background-color: #222;
  color: #bababa;
  font-family: "Inter";
  box-sizing: border-box;
  font-size: 15px;
  padding: 18px 22px;
  border-radius: 5px;
  margin: 4px 0;
  width: 100%;
`

export const EditMessageActionsContainer = styled.div`
  font-size: 12px;
  & span {
    color: #1d77ff;
  }
`
