"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const AttorneysImages = styled.div`
  flex: 1;
  padding: 16px;
`

export const ImagesArea = styled.div`
  position: relative;
  max-width: 500px;
  width: 80%;
  margin: 0 auto;
  
  .img1{
    width: 100%;
    border-radius: 16px;
    border: var(--primary-color) 2px solid;
  }
  .img2{
    position: absolute;
    width: 50%;
    bottom: -10%;
    left: -10%;
    border-radius: 16px;
    border: var(--primary-color) 2px solid;
  }
`

export const AttorneysTexts = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
  
  ${media.mobile(`
    align-items: center;
  `)}

  p{
    line-height: 24px;
  }

  button{
    width: fit-content;
  }
`

export const Range = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50%;
  background-color: var(--dark-blue2);
  z-index: -1;

`