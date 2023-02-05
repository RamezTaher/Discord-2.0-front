import styled from "styled-components"

export const MessagesContainerStyle = styled.div`
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
