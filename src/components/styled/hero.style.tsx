"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const HeroTitle = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;

  span {
    color: var(--primary-color);
  }

  ${media.mobile(`
    font-size: 32px;
  `)}
`

export const HeroImage = styled.div`
  position: relative;
  width: 80%;
  border: 1px solid var(--primary-color-opaque);
  
  ${media.mobile(`
    width: 100%;
  `)}

  img{
    width: 50%;
    transform: scale(1.1);

    ${media.mobile(`
      width: 90%;
    `)}
  }
`

export const ImageTextLeft = styled.p`
  position: absolute;
  top: 33%;
  left: -8%;
  font-size: 14px;
  max-width: 320px;
  line-height: 24px;
  font-weight: bold;

  ${media.tablet(`
    max-width: 240px;
    top: 60%;
    left: -8%;
  `)}
  ${media.mobile(`
    display: none;
  `)}
`

export const ImageTextRight = styled.p`
  position: absolute;
  top: 15%;
  right: -8%;
  font-size: 14px;
  max-width: 320px;
  line-height: 24px;
  font-weight: bold;

  ${media.tablet(`
    max-width: 240px;
    top: 40%;
    right: -8%;
  `)}
  ${media.mobile(`
    display: none;
  `)}
`

export const TextBG = styled.p`
  position: absolute;
  bottom: 0;
  font-size: 200px;
  z-index: -1;
  opacity: 0.4;
  filter: blur(4px);

  ${media.mobile(`
    font-size: 72px;
  `)}
`