import { Container } from "../styled/container.style"
import { HeroImage, HeroSection, HeroTitle, HeroTextLeft, HeroTextRight, TextBG } from "../styled/hero.style"

export const Hero = () => {

  return (
    <HeroSection id="home">
      <Container className="flexCenter heroContainer">
        <HeroTitle data-aos="fade-down">Consultoria <span>jurídica</span><br/> de alta <span>qualidade</span></HeroTitle>
        <HeroImage className="flexCenter">
          <img data-aos="zoom-in" src="estatua.png" alt="estatua" />
          <HeroTextLeft data-aos="zoom-in">
            Somos especialistas em transformar problemas jurídicos em soluções reais.
            Com experiência, compromisso e ética, oferecemos um atendimento personalizado e focado em resultados.
          </HeroTextLeft>
          <HeroTextRight data-aos="zoom-in">
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