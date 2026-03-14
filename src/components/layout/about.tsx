"use client"
import { AboutImages, AboutTexts, ImageBox, ImagesBox } from "../styled/about.style"
import { Container } from "../styled/container.style"
import { Section, SectionDescription, SectionTitle } from "../styled/section.style"
import { motion } from "motion/react"

export const About = () => {

  return (
    <Section id="about">
      <Container className="aboutContainer">
        <AboutTexts>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle>Temos os <span>melhores advogados</span> para seu melhor suporte</SectionTitle>
          </motion.div>
          <SectionDescription>
            Juris Power é seu parceiro confiável em todas as etapas da sua jornada jurídica,
            oferecendo orientação clara, soluções eficazes e atuação firme na defesa dos seus direitos.
          </SectionDescription>
        </AboutTexts>
        <AboutImages>
          <ImagesBox>
            <ImageBox className="img1">
              <img src="about/about-1.png" alt="advogados" />
            </ImageBox>
            <ImageBox className="img2">
              <img src="about/about-2.png" alt="advogados" />
            </ImageBox>
            <ImageBox className="img3">
              <img src="about/about-3.png" alt="advogados" />
            </ImageBox>
          </ImagesBox>
        </AboutImages>
      </Container>
    </Section>
  )
}