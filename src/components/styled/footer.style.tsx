"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const FooterStyled = styled.footer`
  background-color: var(--dark-blue2);
  padding: 32px 16px;
  color: #ffffff;
`

export const FooterTop = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid var(--dark-blue);
  padding-bottom: 20px;
`

export const FooterLinks = styled.footer`
  display: flex;
  gap: 20px;
  font-size: 15px;

  ${media.tablet(`
    display: none;
  `)}
`
  
export const SocialMedias = styled.footer`
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--primary-color);

  svg{
    font-size: 20px;
    cursor: pointer;
  }
`

export const FooterBottom = styled.footer`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 20px;
  font-size: 12px;

  a{
    text-decoration: underline;
  }
`