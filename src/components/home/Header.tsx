import discordLargeLogo from "@/discord-large-logo.svg"
import { Link } from "react-router-dom"
import {
  HeaderContainer,
  HeaderHome,
  Nav,
  NavButton,
  NavLinkContainer,
  NavLinksContainer,
} from "."

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderHome>
          <Nav>
            <Link to={"/"}>
              <img
                src={discordLargeLogo}
                alt="discord Logo"
                className="header-discord-logo"
              />
            </Link>
            <NavLinksContainer>
              <Link to="/">
                <NavLinkContainer>Feature1</NavLinkContainer>
              </Link>
              <Link to="/">
                <NavLinkContainer>Feature2</NavLinkContainer>
              </Link>
              <Link to="/">
                <NavLinkContainer>Feature3</NavLinkContainer>
              </Link>
              <Link to="/">
                <NavLinkContainer>Feature4</NavLinkContainer>
              </Link>
              <Link to="/">
                <NavLinkContainer>Feature4</NavLinkContainer>
              </Link>
            </NavLinksContainer>
            <Link to="/login">
              <NavButton>Open Discord</NavButton>
            </Link>
          </Nav>
        </HeaderHome>
      </HeaderContainer>
    </>
  )
}

export default Header
