import React from "react";
import styled from "styled-components";
import { AiOutlineHome } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Home = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translate(-50%, 0);

  background-color: ${(props) => props.theme.text};
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid ${(props) => props.theme.body};
  width: 2.5rem;
  height: 2.5rem;
  color: ${(props) => props.theme.body};

  cursor: pointer;

  z-index: 3;

  &:hover {
    background-color: #3b6978;
  }

  & > *:first-child {
    color: inherit;
  }
`;

const HomeButton = () => {
  return (
    <Home>
      <NavLink to="/">
        <AiOutlineHome size={25} />
      </NavLink>
    </Home>
  );
};

export default HomeButton;
