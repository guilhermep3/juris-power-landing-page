import { linksNavigations } from "@/data/links-navigations"
import { Container } from "../styled/container.style"
import { FooterBottom, FooterLinks, FooterStyled, FooterTop, SocialMedias } from "../styled/footer.style"
import { FaInstagram, FaFacebook, FaTwitter, FaTiktok } from "react-icons/fa";
import { Logo } from "../logo";

export const Footer = () => {

  return (
    <FooterStyled>
      <Container className="flexCenter footerContainer">
        <FooterTop>
          <Logo />
          <FooterLinks>
            {linksNavigations.map((i) => (
              <a href={`#${i.href}`} key={i.label}>{i.label}</a>
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