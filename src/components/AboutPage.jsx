import React from "react";
import styled, { ThemeProvider, keyframes } from "styled-components";
import { darkTheme } from "./Themes";
import {
  HomeButton,
  SocialIcons,
  LogoComponent,
  ParticleComponent,
  BigTitle,
} from "../subComponents";
import { Jupiter } from "./AllSvgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;
const BounceAnimation = keyframes`
  0% { transform: translateY(-10px) }
  50% { transform: translate(15px) translateX(15px)}
  100% { transform: translateY(-10px) }
`;

const Solar = styled.div`
  position: absolute;
  top: 20%;
  right: 20%;
  width: 20vw;

  animation: ${BounceAnimation} 4s ease infinite;

  stroke: ${(props) => props.theme.text};
  fill: ${(props) => props.theme.body};
`;
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 50vh;
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 1vw);
  top: 10rem;

  font-family: "Unutntu Mono", monospace;
`;

const AboutPage = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <HomeButton />
        <ParticleComponent theme="dark" />

        <Solar>
          <Jupiter width={300} height={300} />
        </Solar>
        <Main>
          I'm a front-end developer located in Cincinnati, Ohio. I love to
          create beautiful Apps with great user experiences.
          <br />
          <br />
          {/* I'm interested in the whole stack and enjoy trying new things and building great projects. I am also learning to create back ends to bring the whole picture together. */}
          While front-end is my main focus, I also enjoy learning back-end. I
          admire the idea of bringing the whole app creation process together.
          <br />
          <br />I believe everything is an art when you put your consciousness
          into it. You can connect with me via social links.
        </Main>
        <BigTitle text="About" top="5%" left="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default AboutPage;
