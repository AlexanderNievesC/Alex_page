import { ReactComponent as Logo } from "../../assets/logo.svg";
import styled from "@emotion/styled";
import { colors } from "../../styles";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const StyledNav = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px 40px 20px 40px;
  text-align: center;
  background-color: ${colors.yellow[300]};
  gap: 50px;
`;

const StyledList = styled.nav`
  font-size: 15px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
`;

const StyledLink = styled.a`
  color: ${colors.gray[700]};
  text-decoration: none;
  font-weight: 500;
  padding: 5px;

  &:hover {
    color: ${colors.gray[700]};
    background-color: ${colors.white};
    border-radius: 10px;
  }
`;

const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  color: ${colors.gray[700]};
  gap: 10px;
  font-weight: 500;
  align-items: center;
`;

const Icon = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;
  text-decoration: none;
`;

export default function Navbar() {
  return (
    <StyledNav>
      <StyledLogo>
        <Logo />
        <div>Alexander Nieves</div>
      </StyledLogo>

      <StyledList>
        <StyledLink href="/">Home</StyledLink>
        <StyledLink href="/about">About</StyledLink>
        <StyledLink href="/portfolio">Portfolio</StyledLink>
        <StyledLink href="/contact">Contact</StyledLink>
      </StyledList>

      <Icon>
        <StyledLink href="https://twitter.com/paulalexandern5" target="_blank">
          <BsTwitter />
        </StyledLink>
        <StyledLink href="https://github.com/paulnc27" target="_blank">
          <AiFillGithub />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/paul-alexander-6669bb136/"
          target="_blank"
        >
          <AiFillLinkedin />
        </StyledLink>
      </Icon>
    </StyledNav>
  );
}
