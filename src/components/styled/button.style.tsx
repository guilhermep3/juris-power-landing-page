"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const Button = styled.button`
  background-color: var(--primary-color);
  padding: 12px 36px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: var(--dark-blue);
  text-transform: uppercase;

  ${media.mobile(`
    padding: 10px 32px;
    font-size: 15px;
  `)}

  &.blue2{

    &::before, &::after{
      background-color: var(--dark-blue2);
    }
  }

  &::before,
  &::after{
    position: absolute;
    content: '';
    top: 50%;
    background-color: var(--dark-blue);
    width: 44px;
    height: 56px;
    display: block;
    border-radius: 200px;
    transition: all 0.3s ease-in-out;
  }
  
  &::before{
    left: 0;
    transform: translateX(-75%) translateY(-50%);
  }

  &::after{
    right: 0;
    transform: translateX(75%) translateY(-50%);
  }
  
  &:hover::before,
  &:hover::after{
    height: 48px;
  }
`