import styled from "styled-components"

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

export const Page = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5865f2;
`
