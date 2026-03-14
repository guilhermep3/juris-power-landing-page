"use client"
import { motion } from "motion/react"
import { Container } from "../styled/container.style"
import { HeroImage, HeroSection, HeroTitle, HeroTextLeft, HeroTextRight, TextBG } from "../styled/hero.style"

export const Hero = () => {

  return (
    <HeroSection id="home">
      <Container className="flexCenter heroContainer">
        <motion.div
          initial={{ opacity: 0, y: -60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <HeroTitle>Consultoria <span>jurídica</span><br /> de alta <span>qualidade</span></HeroTitle>
        </motion.div>
        <HeroImage className="flexCenter">
          <img src="estatua.png" alt="estatua" />
          <HeroTextLeft >
            Somos especialistas em transformar problemas jurídicos em soluções reais.
            Com experiência, compromisso e ética, oferecemos um atendimento personalizado e focado em resultados.
          </HeroTextLeft>
          <HeroTextRight >
            Oferecemos soluções jurídicas práticas e acessíveis, com linguagem clara, atendimento próximo e
            agilidade na resolução dos seus desafios.  Entendemos profundamente a lei para facilitar sua vida.
            Resolvemos com estratégia, clareza e foco no resultado.
          </HeroTextRight>
          <TextBG>ADVOCACIA</TextBG>
        </HeroImage>
      </Container>
    </HeroSection>
  )
}