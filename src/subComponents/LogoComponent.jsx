import React from "react";
import styled from "styled-components";
import { darkTheme } from "../components/Themes";

const Logo = styled.h1`
  display: inline-block;

  font-family: "Pacifico", cursive;
  color: ${(props) =>
    props.color === "dark" ? darkTheme.text : darkTheme.body};
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>THC</Logo>;
};

export default LogoComponent;
