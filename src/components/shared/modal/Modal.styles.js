import { Link } from "react-router-dom";
import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 5;
  display: ${(props) => (props.visible ? "flex" : "none")};
  justify-content: center;
  align-items: center;
`;

export const ModalBody = styled.div`
  width: 90%;
  height: auto;
  z-index: 6;
  background-color: var(--extra-strong-gray-opacity-2);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.6s ease;
  transform: scale(${(props) => (props.scaleModal ? "1" : "0")});
  box-shadow: 0px 0px 20px 2px var(--red);
  box-sizing: border-box;
  position: relative;

  /*Tablet*/
  @media ${devices.tablet} {
    width: 31.25em;
  }

  /*Desktop*/
  @media ${devices.laptop} {
    width: 31.25em;
  }
`;

export const CloseButton = styled.span`
  width: 1em;
  height: 1em;
  filter: blur(3px);
  background-color: var(--red);
  position: absolute;
  top: 1em;
  right: 1em;
  cursor: pointer;
`;
