import styled from "styled-components";
import { Link } from "react-router-dom";

import { devices } from "../../../helpers/breakpoints";

export const ModalMenuContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  display: ${(props) => (props.isMenuModalVisible === true ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  overflow-y: scroll;
`;

export const CloseButton = styled.button`
  position: absolute;
  width: 2.5em;
  height: 2.5em;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: var(--white);
  transition: all 0.5s ease;
  top: 10px;
  right: 10px;
  &:active {
    color: var(--secondary-color);
  }
`;

export const ModalMenuNav = styled.nav`
  width: 9.875em;
  height: 17.625em;
  z-index: 6;
  background-color: var(--extra-strong-gray-opacity-2);
  backdrop-filter: blur(10px);
  border-radius: 10px;
  display: grid;
  align-place: center;
  padding: 1em 0;
  transition: all 0.6s ease;
  transform: scale(${(props) => props.menuScale});
  box-shadow: 0px 0px 20px 5px var(--secondary-color);
  box-sizing: border-box;

  /*Tablet */
  @media ${devices.tablet} {
    width: 15em;
    height: 25em;
  }
`;

export const Navigation = styled.ul`
  /*Phone and tablet */
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
`;

export const CustomLink = styled(Link)`
  color: var(--white);
  transition: all 0.6s ease-in-out;
  color: ${(props) =>
    props.active ? "var(--secondary-color)" : "var(--white)"};
  text-shadow: ${(props) =>
    props.active ? "0px 0px 10px var(--secondary-color)" : "none"};
  &:active {
    color: var(--secondary-color);
  }
`;
