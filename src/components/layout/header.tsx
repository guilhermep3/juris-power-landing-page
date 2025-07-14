"use client"
import { headerLinks } from "@/data/header-links"
import { Container } from "../styled/container.style"
import { Button } from "../styled/button.style"
import {
  StyledHeader,
  LogoContainer,
  NavList,
  NavItem,
} from "../styled/header.style"

export const Header = () => {
  return (
    <StyledHeader>
      <Container className="headerContainer">
        <LogoContainer>
          <img src="lawyer-icon-white.svg" alt="lawyer-icon-white" />
          <p>Juris Power</p>
        </LogoContainer>
        <nav>
          <NavList>
            {headerLinks.map((i, index) => (
              <NavItem key={index}>
                <a href={`#${i.href}`}>{i.label}</a>
              </NavItem>
            ))}
          </NavList>
        </nav>
        <Button>Contato</Button>
      </Container>
    </StyledHeader>
  )
}
