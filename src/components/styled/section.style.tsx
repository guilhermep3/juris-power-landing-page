"use client"
import styled from "styled-components"
import { media } from "./mediaQueries"

export const Section = styled.section`
  padding: 64px 20px;
  display: flex;
  flex-direction: column;
  width: 100%;

  ${media.mobile(`
    padding: 48px 12px;
  `)}
`;