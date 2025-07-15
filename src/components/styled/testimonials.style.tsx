"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const TestimonialsSlide = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
`

export const TestimonialBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 640px;
  margin: 0 auto;
  padding: 40px;
  padding-top: 52px;
  margin: 20px;
  margin-top: 64px;
  background-color: var(--primary-color);
  z-index: 10;
  border-radius: 20px;
  text-align: center;
  
  ${media.mobile(`
    padding: 20px;
    padding-top: 52px;
    max-width: 400px;
  `)}

  img{
    position: absolute;
    top: -50%;
    transform: translateY(50%);
    width: 100px;
    border-radius: 50%;
    border: 4px solid var(--primary-color);
  }

  p{
    color: var(--dark-blue);
    font-size: 16px;

    ${media.mobile(`
      font-size: 14px;
    `)}
  }
  h3{
    color: var(--dark-blue);
    font-size: 20px;
  }
`