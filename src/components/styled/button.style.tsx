"use client"
import styled from "styled-components";

export const Button = styled.button`
  background-color: var(--primary-color);
  padding: 12px 32px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  color: var(--dark-blue);

  &::before{
    position: absolute;
    content: '';
    left: 0;
    top: 50%;
    transform: translateX(-75%) translateY(-50%);
    background-color: var(--dark-blue);
    width: 44px;
    height: 56px;
    display: block;
    border-radius: 200px;
    transition: all 0.3s ease-in-out;
  }
  &::after{
    position: absolute;
    content: '';
    right: 0;
    top: 50%;
    transform: translateX(75%) translateY(-50%);
    background-color: var(--dark-blue);
    width: 44px;
    height: 56px;
    display: block;
    border-radius: 200px;
    transition: all 0.3s ease-in-out;
  }
  
  &:hover{
    
    &::before{
      height: 48px;
    }
    &::after{
      height: 48px;
    }
  }
`