import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { StyledFooter } from "./styles/Footer.styled";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <img src="./img/logo_white.svg" alt="" />
        <Flex>
          <ul>
            <li>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
              repellendus natus praesentium quis, beatae accusantium officiis
              et, in, doloremque aliquid ipsum fugiat quam tenetur ut distinctio
              voluptatibus esse expedita delectus.
            </li>
            <li>+51 921870887</li>
            <li>example@hubble.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Huddle. All rights reserved</p>
      </Container>
    </StyledFooter>
  );
}
