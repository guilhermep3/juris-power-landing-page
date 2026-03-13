import { servicesData } from "@/data/services"
import { Container } from "../styled/container.style"
import { Section, SectionDescription, SectionTitle } from "../styled/section.style"
import { Icon, ServiceBox, ServicesBottom, ServicesTop } from "../styled/services.style"

export const Services = () => {

  return (
    <Section id="services">
      <Container>
        <ServicesTop>
          <SectionTitle data-aos="zoom-in">Os <span>serviços</span> que atendemos</SectionTitle>
          <SectionDescription>
            Nossa missão é tornar o direito acessível, compreensível e eficiente para todos.
            Com ética, dedicação e comprometimento, atuamos de forma próxima, transparente e eficiente.
          </SectionDescription>
        </ServicesTop>
        <ServicesBottom>
          {servicesData.map((i) => (
            <div data-aos="fade-down" key={i.id}>
              <ServiceBox>
                <Icon>{i.icon}</Icon>
                <h3>{i.name}</h3>
                <p>{i.description}</p>
              </ServiceBox>
            </div>
          ))}
        </ServicesBottom>
      </Container>
    </Section>
  )
}