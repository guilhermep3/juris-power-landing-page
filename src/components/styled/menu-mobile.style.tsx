"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const MenuButton = styled.div`
  border-radius: 8px;
  border: 1px solid #1a1a1a;
  background: var(--dark-blue2);
  mix-blend-mode: luminosity;
  box-shadow: 0px 0px 0px 1px #000000;
  backdrop-filter: blur(15px);
  width: 40px;
  height: 40px;
  display: none;
  justify-content: center;
  align-items: center;

  ${media.tablet(`
    display: flex;
  `)}
  
  &.active span:nth-child(1) {
    background-color: #f0f0f0;
    transform: translateY(9px) rotate(-45deg);
  }
  &.active span:nth-child(2) {
    transform: translate(-50%);
    opacity: 0;
  }
  &.active span:nth-child(3) {
    background-color: #f0f0f0;
    transform: translateY(-9px) rotate(45deg);
  }
`

export const Btn = styled.div`
  border: none;
  background: none;
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-family: inherit;

  width: 32px;
  height: 32px;
  padding: 6px 4px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    width: 100%;
    height: 0.125rem;
    border-radius: 0.125rem;
    background-color: #f0f0f0;
    box-shadow: 0 .5px 2px 0 hsla(0, 0%, 0%, .2);
    transition: transform .4s, background-color .4s, opacity .4s;
  }

`

export const NavMenuContainer = styled.div`
  position: fixed;
  z-index: 20;
  top: -100%;
  left: 0;
  right: 0;
  padding: 40px 20px;
  padding-top: 120px;
  background-color: var(--dark-blue2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  
  &.active{
    top: 0;
  }
`

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  `

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  list-style: none;
`