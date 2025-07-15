"use client"
import { linksNavigations } from "@/data/links-navigations"
import { Container } from "../styled/container.style"
import { Button } from "../styled/button.style"
import {
  StyledHeader,
  LogoContainer,
  NavList,
  NavItem,
  Nav,
} from "../styled/header.style"
import { useEffect, useState } from "react"

export const Header = () => {
  const [isActive, setIsActive] = useState(false);

  function checkIsActive() {
    setIsActive(window.scrollY > 1 ? true : false);
  }
  useEffect(() => {
    checkIsActive();
    window.addEventListener('scroll', checkIsActive);

    return window.removeEventListener('scroll', checkIsActive)
  }, []);

  return (
    <StyledHeader className={isActive ? 'active' : ''}>
      <Container className="headerContainer">
        <LogoContainer href="/">
          <img src="lawyer-icon-white.svg" alt="lawyer-icon-white" />
          <p><span>Juris</span> Power</p>
        </LogoContainer>
        <Nav>
          <NavList>
            {linksNavigations.map((i, index) => (
              <NavItem key={index}>
                <a href={`#${i.href}`}>{i.label}</a>
              </NavItem>
            ))}
          </NavList>
        </Nav>
        <Button>Contato</Button>
      </Container>
    </StyledHeader>
  )
}
