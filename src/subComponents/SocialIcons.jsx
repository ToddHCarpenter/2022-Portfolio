import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import styled from "styled-components";
import { motion } from "framer-motion";
import { darkTheme } from "../components/Themes";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    color: inherit;
    margin: 0.5rem 0;
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 12rem;
  background-color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
`;

const SocialIcons = (props) => {
  return (
    <Icons>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1.5, 1, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{
            color: props.theme === "dark" ? darkTheme.text : darkTheme.body,
          }}
          href="https://github.com/ToddHCarpenter"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub size={30} />
        </a>
      </motion.div>
      <motion.div
        initial={{ transform: "scale(0)" }}
        animate={{ scale: [0, 1.5, 1, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{
            color: props.theme === "dark" ? darkTheme.text : darkTheme.body,
          }}
          target="_blank"
          href="https://linkedin.com/in/todd-houston-carpenter"
          rel="noreferrer"
        >
          <AiFillLinkedin size={30} />
        </a>
      </motion.div>

      <Line
        color={props.theme}
        initial={{
          height: 0,
        }}
        animate={{
          height: "12rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
