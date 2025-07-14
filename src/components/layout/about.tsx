import { AboutImages, AboutP, AboutTexts, ImageBox, ImagesBox } from "../styled/about.style"
import { Container } from "../styled/container.style"
import { Section, SectionTitle } from "../styled/section.style"

export const About = () => {

  return (
    <Section>
      <Container className="aboutContainer">
        <AboutTexts>
          <SectionTitle>Temos os <span>melhores advogados</span> para seu melhor suporte</SectionTitle>
          <AboutP>
            Advogados é seu parceiro confiável em todas as etapas da sua jornada jurídica —
            oferecendo orientação clara, soluções eficazes e atuação firme na defesa dos seus direitos.
          </AboutP>
        </AboutTexts>
        <AboutImages>
          <ImagesBox>
            <ImageBox className="img1">
              <img src="about-1.png" alt="advogados" />
            </ImageBox>
            <ImageBox className="img2">
              <img src="about-2.png" alt="advogados" />
            </ImageBox>
            <ImageBox className="img3">
              <img src="about-3.png" alt="advogados" />
            </ImageBox>
          </ImagesBox>
        </AboutImages>
      </Container>
    </Section>
  )
}