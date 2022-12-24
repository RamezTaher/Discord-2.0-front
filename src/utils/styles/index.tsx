import styled from "styled-components"
import { PageProps } from "./styleTypes"

export const InputField = styled.input`
  background: #202225;
  outline: none;
  border: none;
  color: #fff;
  font-size: 18px;
  border-radius: 4px;
  padding: 8px;
`
export const InputContainer = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 5px;
`
export const InputLabel = styled.label`
  color: #adafb3;
  font-size: 16px;
`
export const FormTitle = styled.h2`
  color: #fff;
  font-size: 22px;
  font-weight: 500;
  margin-bottom: 20px;
  text-align: center;
`

export const Button = styled.button`
  width: 100%;
  background-color: #5865f2;
  border-radius: 4px;
  color: white;
  border: 0;
  outline: 0;
  padding: 14px 0;
  font-size: 18px;
  font-weight: 500;
  cursor: pointer;
  transition: all ease 0.3;
  &:hover {
    background-color: #4752c4;
  }
`

export const Page = styled.div<PageProps>`
  height: 100%;
  display: ${(props) => props.display};
  justify-content: ${(props) => props.justifyContent};
  align-items: ${(props) => props.alignItems};
  background-color: ${(props) => props.backgoundColor};
`

export const ChatSidebarStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 300px;
  padding: 15px;
  background-color: #2f3136;
  color: #96989d;
  & header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 15px;
    & h1 {
      font-weight: 500px;
    }
  }
`
export const ChannelStyle = styled.section`
  height: 100%;
  margin-left: 300px;
  background-color: #36393f;
`
export const ChatDefaultStyle = styled.section`
  height: 100%;
  margin-left: 300px;
  background-color: #36393f;
`
