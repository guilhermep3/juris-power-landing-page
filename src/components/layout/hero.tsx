import { Container } from "../styled/container.style"
import { HeroImage, HeroTitle, ImageTextLeft, ImageTextRight, TextBG } from "../styled/hero.style"
import { Section } from "../styled/section.style"

export const Hero = () => {

  return (
    <Section id="home">
      <Container className="flexCenter heroContainer">
        <HeroTitle>Consultoria <span>jurídica</span><br/> de alta <span>qualidade</span></HeroTitle>
        <HeroImage className="flexCenter">
          <img src="estatua.png" alt="estatua" />
          <ImageTextLeft>
            Somos especialistas em transformar problemas jurídicos em soluções reais.
            Com experiência, compromisso e ética, oferecemos um atendimento personalizado e focado em resultados.
          </ImageTextLeft>
          <ImageTextRight>
            Oferecemos soluções jurídicas práticas e acessíveis, com linguagem clara, atendimento próximo e 
            agilidade na resolução dos seus desafios.  Entendemos profundamente a lei para facilitar sua vida. 
            Resolvemos com estratégia, clareza e foco no resultado.
          </ImageTextRight>
          <TextBG>ADVOCACIA</TextBG>
        </HeroImage>
      </Container>
    </Section>
  )
}