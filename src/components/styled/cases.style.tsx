"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const CasesTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`

export const CasesSlide = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  padding: 8px;
`

export const CaseBox = styled.div`
  position: relative;
  width: 280px;
  height: 360px;

  img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CaseInfos = styled.div`
  position: absolute;
  top: 50%;
  right: -33%;
  width: 80%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 20px;
  background-color: var(--dark-blue2);

  ${media.mobile(`
    right: -25%;
  `)}

  h1{
    font-size: 18px;

    ${media.mobile(`
      font-size: 16px;
    `)}
  }
  p{
    font-size: 13px;
    line-height: 20px;
  
    ${media.mobile(`
      font-size: 12px;
    `)}
  }
  a{
    position: relative;
    color: var(--primary-color);
    font-weight: 500;
    font-size: 15px;
    text-transform: uppercase;
    
    &::before{
      content: '';
      position: absolute;
      top: 50%;
      left: 45%;
      width: 80px;
      height: 3px;
      background-color: var(--primary-color);
      z-index: 10;
    }
  }
`

export const CaseRelative = styled.aside`
  position: relative;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: #fe4;
`

export const CaseAside = styled.aside`
  position: absolute;
  bottom: 0;
  left: -14%;
  transform: translateY(-100%) rotate(270deg);
  transform-origin: left center;
  padding:6px 12px;
  background-color: var(--primary-color);
  color: var(--dark-blue);
  font-weight: 500;
`