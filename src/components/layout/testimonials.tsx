"use client"
import { Container } from "../styled/container.style"
import { Section, SectionTitle } from "../styled/section.style"
import { TestimonialBox, TestimonialsSlide } from "../styled/testimonials.style";
import { testimonialsData } from "@/data/testimonials";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useEffect, useState } from "react";
import { SwipperArrows } from "../swiper-arrows";
export const Testimonials = () => {
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
    <Section id="rating">
      <Container>
        <SectionTitle className="center"><span>Avaliações</span> dos nossos clientes</SectionTitle>
        <TestimonialsSlide>
          <Swiper
            spaceBetween={20}
            slidesPerView={isMobile ? 1 : 2}
          >
            {testimonialsData.map((i) => (
              <SwiperSlide key={i.id}>
                <TestimonialBox>
                  <img src={`testimonials/${i.image}`} alt={`avaliação de ${i.name} sobre advocacia`} />
                  <p>{i.message}</p>
                  <h3>{i.name}</h3>
                </TestimonialBox>
              </SwiperSlide>
            ))}
          </Swiper>
          <SwipperArrows></SwipperArrows>
        </TestimonialsSlide>
      </Container>
    </Section>
  )
}