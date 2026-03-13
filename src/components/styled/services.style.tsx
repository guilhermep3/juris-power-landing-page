"use client"

import styled from "styled-components"
import { media } from "./mediaQueries"

export const ServicesTop = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 20px;
  
  h1{
    width: 50%;
    margin: 0 auto;
    
    ${media.tablet(`
      width: 100%;
    `)}
  }
  p{
    width: 50%;
    margin: 0 auto;

    ${media.tablet(`
      width: 100%;
    `)}
  }
`

export const ServicesBottom = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 44px;
  text-align: center;

  ${media.tablet(`
    grid-template-columns: repeat(1, 1fr);
  `)}
`

export const ServiceBox = styled.div`
  max-width: 360px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  margin: 0 auto;
  transition: all 0.3s ease;
  padding: 20px 8px;
  border: transparent 1px solid;
  
  &:hover {
    transform: scale(1.05);
    background-color: #13132e55;
    border-color: var(--primary-color-opaque);
  }

  ${media.mobile(`
    max-width: 320px;
  `)}

  h3{
    font-size: 22px;
  }
  p {
    font-size: 14px;
    color: var(--gray-30);
  }
`

export const Icon = styled.div`
  font-size: 36px;
  color: var(--primary-color);
  padding: 16px;
  border-radius: 4px;
  background-color: var(--primary-color-opaque);
  width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`