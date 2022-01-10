import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { darkTheme } from "../components/Themes";

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 30vh;
  display: flex;
  //gradient to create color border
  background-repeat: no-repeat;
  background-size: 100% 2px;
  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 3;
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;
  ul {
    list-style: none;
  }
`;
const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 2rem;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:last-child {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }
`;
const LetterContainer = styled(motion.div)`
  position: relative;
  display: flex;

  align-items: center;
  height: 100%;
  width: 100%;
  padding-left: 1rem;
`;
const FirstLetter = styled.h1`
  font-family: "Pacifico", cursive;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-size: calc(3em + 2.5vw);

  @media screen and (max-width: 620px) {
    font-size: calc(3em + 1.5vw);
  }

  @media screen and (max-width: 580px) {
    font-size: calc(2em + 1.5vw);
  }
  @media screen and (max-width: 415px) {
    font-size: calc(1em + 1vw);
  }
`;
const AfterLetter = styled.span`
  font-size: calc(1.5em + 1.5vw);
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  font-weight: 500;
  padding-left: 1rem;

  @media screen and (max-width: 485px) {
    font-size: calc(1em + 1.5vw);
  }

  @media screen and (max-width: 580px) {
    font-size: calc(1em + 1vw);
    padding-left: 0.5rem;
  }
  @media screen and (max-width: 415px) {
    font-size: calc(1em + 1vw);
    padding-left: 0.5rem;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "30vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Todd.</h3>
          <h6>I like to design and code functional Apps.</h6>
        </Text>
      </SubBox>
      <SubBox>
        <LetterContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.5, delay: 1 }}
        >
          <ul>
            <li>
              <FirstLetter>T</FirstLetter>
              <AfterLetter>odd</AfterLetter>
            </li>

            <li>
              <FirstLetter>H</FirstLetter>
              <AfterLetter>ouston</AfterLetter>
            </li>

            <li>
              <FirstLetter>C</FirstLetter>
              <AfterLetter>arpenter</AfterLetter>
            </li>
          </ul>
        </LetterContainer>
      </SubBox>
    </Box>
  );
};

export default Intro;
