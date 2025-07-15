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
`;

export const SectionTitle = styled.h1`
  font-size: 36px;
  font-weight: bold;

  span {
    color: var(--primary-color);
  }

  ${media.mobile(`
    font-size: 28px;
    text-align: center;
  `)}
`