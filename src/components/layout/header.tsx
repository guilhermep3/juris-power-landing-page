"use client"
import { linksNavigations } from "@/data/links-navigations"
import { Container } from "../styled/container.style"
import { Button } from "../styled/button.style"
import { StyledHeader, NavList, NavItem, Nav } from "../styled/header.style"
import { useEffect, useState } from "react"
import { Btn, MenuButton, NavMenu, NavMenuContainer, Ul } from "../styled/menu-mobile.style"
import { Logo } from "../logo"

export const Header = () => {
  const [isActive, setIsActive] = useState(false);
  const [isMenuActive, setIsMenuActive] = useState(false);

  function checkIsActive() {
    setIsActive(window.scrollY > 1 ? true : false);
  }
  useEffect(() => {
    checkIsActive();
    window.addEventListener('scroll', checkIsActive);

    return window.removeEventListener('scroll', checkIsActive)
  }, []);

  return (
    <>
      <StyledHeader className={isActive ? 'active' : ''}>
        <Container className="headerContainer">
          <Logo />
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
          <MenuButton className={isMenuActive ? 'active' : ''}
            onClick={() => {
              setIsMenuActive(prev => !prev)
            }}
          >
            <Btn>
              <span></span>
              <span></span>
              <span></span>
            </Btn>
          </MenuButton>
        </Container>
      </StyledHeader>
      <NavMenuContainer className={isMenuActive ? 'active' : ''}>
        <NavMenu>
          <Ul>
            {linksNavigations.map((i, index) => (
              <NavItem key={index}
              onClick={() => {
                setIsMenuActive(prev => !prev)
              }}
              >
                <a href={`#${i.href}`}>{i.label}</a>
              </NavItem>
            ))}
          </Ul>
        </NavMenu>
      </NavMenuContainer>
    </>
  )
}
