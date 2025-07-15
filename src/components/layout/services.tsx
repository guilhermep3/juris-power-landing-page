import { servicesData } from "@/data/services"
import { Container } from "../styled/container.style"
import { Section, SectionTitle } from "../styled/section.style"
import { Icon, ServiceBox, ServicesBottom, ServicesTop } from "../styled/services.style"

export const Services = () => {

  return (
    <Section>
      <Container>
        <ServicesTop>
          <SectionTitle>Os <span>serviços</span> que atendemos</SectionTitle>
          <p>
            Nossa missão é tornar o direito acessível, compreensível e eficiente para todos.
            Com ética, dedicação e comprometimento, atuamos de forma próxima, transparente e eficiente.
          </p>
        </ServicesTop>
        <ServicesBottom>
          {servicesData.map((i) => (
            <ServiceBox>
              <Icon>{i.icon}</Icon>
              <h3>{i.name}</h3>
              <p>{i.description}</p>
            </ServiceBox>
          ))}
        </ServicesBottom>
      </Container>
    </Section>
  )
}