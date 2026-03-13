"use client"
import styled from "styled-components"
import { media } from "./mediaQueries"

export const Section = styled.section`
  padding: 80px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.mobile(`
    padding: 48px 12px;
  `)}

  &.relative{
    position: relative;
  }
  &#services{
    background: var(--dark-blue2);
  }
`;

export const SectionTitle = styled.h1`
  font-size: 48px;
  font-weight: bold;
  font-family: var(--second-font);

  &.center{
    text-align: center;
  }

  span {
    color: var(--primary-color);
  }

  ${media.mobile(`
    font-size: 36px;
    text-align: center;
  `)}
`
export const SectionDescription = styled.p`
  margin: 20px 0;
  font-size: 18px;
  color: var(--gray-30);
  letter-spacing: 0.02em;

  ${media.mobile(`
    font-size: 16px;
    text-align: center;
  `)}
`