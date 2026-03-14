"use client"
import { motion } from "motion/react"
import { AttorneysImages, AttorneysTexts, ImagesArea, Range } from "../styled/atorneys.style"
import { Button } from "../styled/button.style"
import { Container } from "../styled/container.style"
import { Section, SectionDescription, SectionTitle } from "../styled/section.style"

export const Attorneys = () => {

  return (
    <Section id="attorneys" className="relative">
      <Container className="attorneysContainer">
        <AttorneysImages>
          <ImagesArea>
            <img src="attorneys-1.png" className="img1" alt="attorneys-1" />
            <img src="attorneys-2.png" className="img2" alt="attorneys-2" />
          </ImagesArea>
        </AttorneysImages>
        <AttorneysTexts>
          <motion.div
            initial={{ opacity: 0, y: -60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <SectionTitle>Nós temos os <span>melhores advogados</span> para te atender</SectionTitle>
          </motion.div>
          <SectionDescription>
            Sabemos que questões jurídicas podem ser desafiadoras,  por isso, atuamos com empatia, clareza e total
            transparência. Cada cliente é tratado como único, com atenção dedicada e soluções sob medida.
            Mais que advogados, somos seus parceiros para decisões seguras, inteligentes e amparadas pela lei.
          </SectionDescription>
          <Button className="blue2">Ver Mais</Button>
        </AttorneysTexts>
        <Range></Range>
      </Container>
    </Section>
  )
}