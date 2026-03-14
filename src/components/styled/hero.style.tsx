"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const HeroSection = styled.section`
  position: relative;
  background: var(--dark-blue2);
  overflow: hidden;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 80px 20px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.033) 0px,
      rgba(255, 255, 255, 0.033) 1px,
      transparent 1px,
      transparent 100px
    );
    pointer-events: none;
    z-index: 0;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
      ellipse 90% 80% at 50% 50%,
      transparent 25%,
      #00000077 100%
    );
    pointer-events: none;
    z-index: 1;
  }

  ${media.mobile(`
    padding: 48px 12px;
  `)}
`

export const HeroTitle = styled.h1`
  font-size: 60px;
  text-transform: uppercase;
  text-align: center;
  font-weight: bold;
  font-family: var(--second-font);

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
    width: 60%;
    transform: scale(1.1);
    z-index: 20;

    &:hover {
      transform: scale(1.25);
    }

    ${media.mobile(`
      width: 90%;
    `)}
  }
`

export const HeroTextBase = styled.p`
  position: absolute;
  font-size: 14px;
  max-width: 320px;
  line-height: 24px;
  color: var(--gray-30);
  letter-spacing: 0.05em;
`

export const HeroTextLeft = styled(HeroTextBase)`
  top: 33%;
  left: -8%;

  ${media.tablet(`
    max-width: 240px;
    top: 60%;
    left: -8%;
  `)}
  ${media.mobile(`
    display: none;
  `)}
`

export const HeroTextRight = styled(HeroTextBase)`
  top: 15%;
  right: -8%;

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