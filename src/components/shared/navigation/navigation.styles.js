import styled from "styled-components";
import { Link } from "react-router-dom";

import { devices } from "../../../helpers/breakpoints";

export const Nav = styled.nav`
  /* Phone and tablet desing */
  width: 100%;
  height: 5em;
  display: grid;
  grid-template-columns: repeat(3, max-content);
  grid-template-areas: "icon-menu" "logo" "language-button";
  position: fixed;
  background-color: var(--extra-strong-gray-opacity-2);
  backdrop-filter: blur(10px);
  border-bottom: solid 2px var(--secondary-color);
  top: 0;
  z-index: 1;
  padding: 0 1em;
  transition: all 0.5s ease;
  align-items: center;
  justify-content: center;

  @media ${devices.tablet} {
    justify-content: space-around;
  }

  /*Responsive  Desktop */
  @media ${devices.laptop} {
    grid-template-areas: "logo" "icon-menu" "language-button";
    border: none;
    height: 5em;
    padding: 0;
    position: ${(props) => (props.isNavFixed ? "fixed" : "absolute")};
    background-color: ${(props) =>
      props.isNavFixed ? "var(--extra-strong-gray-opacity-2)" : "transparent"};
    backdrop-filter: ${(props) =>
      props.isNavFixed ? "blur(10px)" : "blur(0px)"};
  }
`;

export const LogoPage = styled.figure`
  grid-area: "logo";
`;

export const LanguageButton = styled.ul`
  grid-area: "language-button";
`;

export const Navigation = styled.ul`
  /*Phone and tablet */
  display: none;
  list-style: none;
  a {
    text-decoration: none;
  }
  /* desktop design*/
  @media ${devices.laptop} {
    display: inline-flex;
    justify-content: center;
    gap: 1.875em;
    grid-area: "icon-menu";
  }
`;
export const CustomLink = styled(Link)`
  color: ${(props) =>
    props.active ? "var(--secondary-color)" : "var(--white)"};
  text-shadow: ${(props) =>
    props.active ? "0px 0px 10px var(--secondary-color)" : "none"};
  transition: all 0.6s ease-in-out;
  &:hover {
    color: var(--secondary-color);
    text-shadow: 0px 0px 10px var(--secondary-color);
  }
`;
export const MenuButton = styled.button`
  /* Phone and tablet*/
  width: 2.5em;
  height: 2.5rem;
  border: none;
  cursor: pointer;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.5s ease;
  color: var(--white);
  background-color: transparent;
  grid-area: "icon-menu";

  /*Responsive desing desktop*/
  @media ${devices.laptop} {
    display: none;
  }
`;
