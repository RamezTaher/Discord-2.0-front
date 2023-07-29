import styled from "styled-components"

export const HeaderContainer = styled.div`
  z-index: 9998;
  width: 100%;
  max-width: 1260px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0 20px;
  padding: 0 40px;
`

export const HeaderHome = styled.header`
  grid-column: span 12;
`
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 80px;
`

export const NavLinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
  text-align: center;
  font-size: 16px;
  font-weight: 600;
`

export const NavLinkContainer = styled.span`
  color: #fff;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
`

export const NavButton = styled.div`
  border-radius: 40px;
  font-size: 12px;
  padding: 7px 16px;
  background-color: #fff;
  color: #23272a;
  line-height: 24px;
  cursor: pointer;
  font-weight: 500;
  display: inline-flex;
  align-items: center;
  transition-property: background-color, color, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  white-space: nowrap;
  &:hover {
    color: #5865f2;
    box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }
`

export const HeroShowcaseContainer = styled.div`
  padding: 120px 40px;
  z-index: 1;
  width: 100%;
  max-width: 1260px;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0 20px;
`
export const HeroShowcaseBody = styled.div`
  grid-column: 3 / span 8;
  text-align: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 50px;
`

export const ShowCaseButton = styled.div`
  border-radius: 40px;
  font-size: 18px;
  padding: 15px 32px;
  background-color: #fff;
  color: #23272a;
  line-height: 24px;
  cursor: pointer;
  font-weight: 500;

  transition-property: background-color, color, box-shadow;
  transition-duration: 0.2s;
  transition-timing-function: ease-in-out;
  white-space: nowrap;
  &:hover {
    color: #5865f2;
    box-shadow: 0 8px 15px rgb(0 0 0 / 20%);
  }
`
