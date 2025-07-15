import { linksNavigations } from "@/data/links-navigations"
import { Container } from "../styled/container.style"
import { FooterBottom, FooterLinks, FooterStyled, FooterTop, SocialMedias } from "../styled/footer.style"
import { LogoContainer } from "../styled/header.style"
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";

export const Footer = () => {

  return (
    <FooterStyled>
      <Container className="flexCenter footerContainer">
        <FooterTop>
          <LogoContainer>
            <img src="lawyer-icon-white.svg" alt="lawyer-icon-white" />
            <p><span>Juris</span> Power</p>
          </LogoContainer>
          <FooterLinks>
            {linksNavigations.map((i) => (
              <a href={i.href} key={i.label}>{i.label}</a>
            ))}
          </FooterLinks>
          <SocialMedias>
            <FaInstagram/>
            <FaFacebook/>
            <FaTwitter/>
            <FaTiktok/>
          </SocialMedias>
        </FooterTop>
        <FooterBottom>
          <p>Desenvolvido por <a href="https://github.com/guilhermep3" target="_blank">Guilherme Pereira</a></p>
        </FooterBottom>
      </Container>
    </FooterStyled>
  )
}