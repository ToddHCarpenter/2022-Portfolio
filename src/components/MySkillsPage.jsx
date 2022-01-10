import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaServer } from "react-icons/fa";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { lightTheme } from "./Themes";
import {
  HomeButton,
  SocialIcons,
  LogoComponent,
  ParticleComponent,
} from "../subComponents";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media screen and (max-width: 840px) {
    display: flex;
    flex-direction: column;
    padding-top: 3rem;
  }
  @media screen and (max-width: 534px) {
    padding-top: 7rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 30vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }

  @media screen and (max-width: 840px) {
    width: 70vw;
    height: 40vh;

    margin-bottom: 1rem;
    padding: 1rem;
  }
  @media screen and (max-width: 534px) {
    width: 45vw;
    height: 45vh;
    line-height: 1;
    margin-bottom: 1rem;
  }
`;
const Title = styled.div`
  color: ${(props) => props.theme.text};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;

  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  @media screen and (max-width: 534px) {
    display: flex;
    align-items: center;
    font-size: calc(0.8em + 1vw);
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  p {
    margin-left: 2rem;
  }
  ul {
    margin-left: 3rem;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <HomeButton />
        <ParticleComponent theme="light" />
        <Main>
          <Title>
            <HiOutlineDesktopComputer
              style={{ paddingRight: "1rem" }}
              size={40}
            />
            <h3>Front-End</h3>
          </Title>
          <Description>
            I love to create Web Apps that are clean, minimal, and easy to use.
          </Description>
          <Description>
            <strong>Skills:</strong>
            <p>React, Redux, Html, Css, Js, Tailwind etc..</p>
          </Description>
          <Description>
            <strong>Tools:</strong>
            <ul>
              <li>VsCode</li>
              <li>Affinity Designer</li>
              <li>Rapid Api</li>
              <li>Rive</li>
              <li>GitHub</li>
            </ul>
          </Description>
        </Main>
        <Main>
          <Title>
            <FaServer style={{ paddingRight: "1rem" }} size={40} />
            <h3>Back-end</h3>
          </Title>
          <Description>
            Back-end developemt is not my strongest skill set, but it is one
            that I am working to better understand.
          </Description>
          <Description>
            <strong>Skills:</strong>
            <p>Python, Django, API services etc...</p>
          </Description>
          <Description>
            <strong>Tools:</strong>
            <ul>
              <li>VsCode</li>
              <li>GitHub</li>
              <li>Rapid Api</li>
            </ul>
          </Description>
        </Main>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
