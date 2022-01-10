import React, { useRef, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme } from "./Themes";
import { motion } from "framer-motion";

import { HomeButton, SocialIcons, LogoComponent } from "../subComponents";
import Card from "../subComponents/Card";
import { Work } from "../data/WorkData";
import { Key, Switch } from "./AllSvgs";
import { BigTitle } from "../subComponents";

import configBubble from "../config/particlesjs-config-bubble.json";
import Particles from "react-particles-js";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 400vh;
  position: relative;
  overflow: hidden;
`;

const PaticleContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 20rem;
  left: calc(10rem + 15vh);
  height: 40vh;
  display: flex;
  z-index: 3;
  color: ${(props) => props.theme.text};
`;
const KeySwitch = styled(motion.span)`
  display: flex;
  flex-direction: column;
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1;
  stroke: ${(props) => props.theme.text};
`;

//Framer motion configure
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const WorkPage = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const scroll = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;
    };

    window.addEventListener("scroll", scroll);

    return () => window.removeEventListener("scroll", scroll);
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
      <Box>
        <LogoComponent theme="dark" />
        <SocialIcons theme="dark" />
        <PaticleContainer>
          <Particles
            style={{ position: "absolute", top: 0, color: "#fff" }}
            params={configBubble}
          />
        </PaticleContainer>
        <HomeButton />
        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((data) => (
            <Card key={data.id} data={data} />
          ))}
        </Main>
        <KeySwitch
          initial={{
            x: 200,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
          animate={{
            x: 0,
            transition: { type: "spring", duration: 1.5, delay: 1 },
          }}
        >
          <Key width={100} height={100} />
          <Switch width={100} height={100} />
        </KeySwitch>
        <BigTitle text="WORK" top="10%" right="20%" />
      </Box>
    </ThemeProvider>
  );
};

export default WorkPage;
