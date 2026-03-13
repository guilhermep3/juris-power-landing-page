"use client"
import Link from "next/link"
import { Button } from "../styled/button.style"
import { CaseAside, CaseBox, CaseInfos, CaseRelative, CasesSlide, CasesTop } from "../styled/cases.style"
import { Container } from "../styled/container.style"
import { Section, SectionDescription, SectionTitle } from "../styled/section.style"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { casesData } from "@/data/cases"
import { useEffect, useState } from "react"
import { SwipperArrows } from "../swiper-arrows"

export const Cases = () => {
  const [isMobile, setIsMobile] = useState(false);

  function checkIsMobile() {
    setIsMobile(window.innerWidth < 768 ? true : false);
  }
  useEffect(() => {
    checkIsMobile();
    window.addEventListener('scroll', checkIsMobile);

    return window.removeEventListener('scroll', checkIsMobile)
  }, []);

  return (
    <Section id="cases">
      <Container>
        <CasesTop>
          <SectionTitle data-aos="zoom-in">Nossos <span>estudos</span> de cada <span>caso</span></SectionTitle>
          <SectionDescription>
            Explore nossos estudos e descubra como cada caso judicial é tratado na prática. Entenda como podemos ajudar você e veja de perto como atuamos em diferentes áreas.
          </SectionDescription>
          <Button>Ver mais</Button>
        </CasesTop>
        <CasesSlide>
          <Swiper
            spaceBetween={40}
            slidesPerView={isMobile ? 1 : 3}
          >
            {casesData.map((i, index) => (
              <SwiperSlide key={index}>
                <CaseBox>
                  <img src={`cases/${i.img}`} alt={i.img} />
                  <CaseInfos>
                    <h1>{i.title}</h1>
                    <p>{i.description}</p>
                    <Link href="#">Ver mais</Link>
                    <CaseRelative>
                      <CaseAside>{i.aside}</CaseAside>
                    </CaseRelative>
                  </CaseInfos>
                </CaseBox>
              </SwiperSlide>
            ))}
          </Swiper>
          <SwipperArrows></SwipperArrows>
        </CasesSlide>
      </Container>
    </Section>
  )
}