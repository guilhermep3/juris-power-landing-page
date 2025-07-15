"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 64px;
  
  &.flexCenter{
    justify-content: center;
    align-items: center;
  }

  &.headerContainer{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
  }
  &.heroContainer{
    gap: 90px;
    margin-top: 100px;
    
    ${media.mobile(`
      margin-top: 80px;
    `)}
  }
  &.aboutContainer{
    gap: 0px;

    ${media.mobile(`
      gap: 40px;
    `)}    
  }
  &.attorneysContainer{
    flex-direction: row;
    gap: 20px;
    
    ${media.tablet(`
      gap: 40px;
      flex-direction: column;
    `)}
  }
`