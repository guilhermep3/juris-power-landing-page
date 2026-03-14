"use client"
import styled from "styled-components"
import { media } from "./mediaQueries"

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--dark-blue);
  color: #ffffff;
  padding: 24px 8px;
  z-index: 10;
  transition: all 0.3s linear;
  box-shadow: 2px 2px 4px #020205;
  z-index: 30;

  &.active{
    padding: 16px 8px;
  }
`

export const LogoContainer = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;

  img{
    width: 64px;

    ${media.mobile(`
      width: 48px;
    `)}
  }
  p{
    font-size: 22px;
    font-weight: bold;
    text-transform: uppercase;
    font-family: var(--second-font);

    ${media.tablet(`
      max-width: 80px;
      font-size: 18px;  
    `)}

    span {
      color: var(--primary-color);
    }
  }
`

export const Nav = styled.nav`

  ${media.mobile(`
    display: none;
  `)}
`

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
  text-transform: uppercase;
  font-size: 15px;
  
  ${media.tablet(`
    gap: 20px;
    font-size: 13px;
  `)}
`

export const NavItem = styled.li`

  a{
    position: relative;
    text-decoration: none;
    color: inherit;
    transition: all 0.3s ease-in-out;

    ${media.tablet(`
      font-size: 14px;
    `)}

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      transform: translateY(10px);
      width: 100%;
      height: 3px;
      background-color: transparent;
      transition: all 0.3s ease-in-out;
    }

    &:hover {
      color: var(--primary-color);
    }

    &:hover::after {
      background-color: var(--primary-color);
    }
  }
`