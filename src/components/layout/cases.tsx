"use client"
import Link from "next/link"
import { Button } from "../styled/button.style"
import { CaseAside, CaseBox, CaseInfos, CaseRelative, CasesSlide, CasesTop } from "../styled/cases.style"
import { Container } from "../styled/container.style"
import { Section, SectionTitle } from "../styled/section.style"
import { Swiper, SwiperSlide } from 'swiper/react';
import { casesData } from "@/data/cases"
import 'swiper/css';
import { useEffect, useState } from "react"

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
    <Section>
      <Container>
        <CasesTop>
          <SectionTitle>Nossos <span>estudos</span> de cada <span>caso</span></SectionTitle>
          <p>Explore nossos estudos e descubra como cada caso judicial é tratado na prática. Entenda como podemos ajudar você e veja de perto como atuamos em diferentes áreas.</p>
          <Button>Ver mais</Button>
        </CasesTop>
        <CasesSlide>
          <Swiper
            spaceBetween={40}
            slidesPerView={isMobile ? 1 : 3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            {casesData.map((i) => (
              <SwiperSlide>
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
        </CasesSlide>
      </Container>
    </Section>
  )
}