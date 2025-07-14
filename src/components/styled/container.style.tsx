"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;

  &.headerContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  &.heroContainer{
    gap: 90px;
    margin-top: 80px;
    
    ${media.mobile(`
      margin-top: 40px;
    `)}
  }
  &.aboutContainer{
    gap: 64px;

    ${media.mobile(`
      gap: 40px;
    `)}    
  }
  &.flexRow{
    flex-direction: row;
  }
  &.flexCenter{
    justify-content: center;
    align-items: center;
  }
`