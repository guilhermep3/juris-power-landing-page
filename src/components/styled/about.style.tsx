"use client"
import styled from "styled-components";
import { media } from "./mediaQueries";

export const AboutTexts = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;
  max-width: 80%;
  margin: 0 auto;

  ${media.tablet(`
    flex-direction: column;
    max-width: 100%;
  `)}

  h1{
    width: 100% !important;

    ${media.tablet(`
      width: 95%;
    `)}
  }
`

export const AboutImages = styled.div`
  width: 100%;
  height: auto;
  margin-top: -80px;
`;

export const ImagesBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
`;

export const ImageBox = styled.div`
  position: absolute;
  border: var(--primary-color) 2px solid;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
  }

  &.img1 {
    top: 17%;
    left: 9%;
    width: 30%;
  }

  &.img2 {
    bottom: 4%;
    left: 4%;
    width: 40%;
  }

  &.img3 {
    top: 20%;
    right: 4%;
    width: 55%;
  }
`;