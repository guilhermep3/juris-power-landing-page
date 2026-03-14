import { LogoContainer } from "./styled/header.style"

export const Logo = () => {

  return (
    <LogoContainer href="/">
      <img src="juris-power-logo.png" alt="juris-power-logo" />
      <p><span>Juris</span> Power</p>
    </LogoContainer>
  )
}