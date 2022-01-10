import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import HomeButton from "../subComponents/HomeButton";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import Intro from "./Intro";
import { Key, Switch } from "./AllSvgs";

import { motion } from "framer-motion";

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;
const Container = styled.div`
  padding: 2rem;
`;

const WORK = styled(NavLink)`
  color: ${(props) => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 3;
`;

const SKILLS = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  position: absolute;
  top: 50%;
  left: 2rem;
  transform: rotate(-90deg) translate(50%, -50%);
  text-decoration: none;
  z-index: 3;
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const ABOUT = styled(NavLink)`
  color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  text-decoration: none;
  z-index: 3;
`;
const CONTACT = styled.div`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 3;
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: ${(props) => props.theme.text};
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const BounceAnimation = keyframes`
  0% { padding-bottom: 0; }
  50% { padding-bottom: 20px }
  100% { padding-bottom: 0 }
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  background: transparent;

  outline: none;
  border: none;
  color: ${(props) => props.theme.text};
  stroke: ${(props) => props.theme.text};
  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: all 1s ease;

  animation: ${BounceAnimation} 2s linear infinite;

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <HomeButton />
        <LogoComponent theme={`${click ? "dark" : "light"}`} />
        <SocialIcons theme={`${click ? "dark" : "light"}`} />

        <Center color={{ color: "inherit" }} click={click}>
          <Key
            width={`${click ? 120 : 200}`}
            height={`${click ? 120 : 200}`}
            onClick={() => handleClick()}
          />
          <Switch
            width={`${click ? 120 : 200}`}
            height={`${click ? 120 : 200}`}
            onClick={() => handleClick()}
          />
          <span style={{ color: "inherit" }}>click here</span>
        </Center>
        <WORK to="/work">
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Work
          </motion.h2>
        </WORK>
        <SKILLS to="/skills" click={click}>
          <motion.h2
            initial={{
              y: -200,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            animate={{
              y: 0,
              transition: { type: "spring", duration: 1.5, delay: 1 },
            }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Skills
          </motion.h2>
        </SKILLS>
        <BottomBar>
          <ABOUT to="/about" click={click}>
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              About
            </motion.h2>
          </ABOUT>
          <CONTACT>
            <a
              style={{ color: "inherit" }}
              target="_blank"
              href="mailto:thueycarp@gmail.com"
              rel="noreferrer"
            >
              <motion.h2
                initial={{
                  y: 200,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                animate={{
                  y: 0,
                  transition: { type: "spring", duration: 1.5, delay: 1 },
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact Me
              </motion.h2>
            </a>
          </CONTACT>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
