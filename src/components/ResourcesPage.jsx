import React from "react";
import styled, { ThemeProvider } from "styled-components";
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
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  width: 60vw;
  height: 60vh;
`;

const ResourcesPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <HomeButton />
        <ParticleComponent theme="bubble" />
        <Main></Main>
      </Box>
    </ThemeProvider>
  );
};

export default ResourcesPage;
