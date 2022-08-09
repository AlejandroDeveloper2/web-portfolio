import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const PanelContainer = styled.div`
  /*Phone*/
  width: auto;
  height: 8.125em;
  background-color: var(--extra-strong-gray);
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 10px 5px var(--secondary-color);
  transition: all 0.5s ease;
  position: fixed;
  right: ${(props) => (props.visible ? "0" : "-8em")};
  top: 7em;
  z-index: 3;
  button {
    width: 100%;
    padding: 1.5em 1.5em;
    display: grid;
    align-place: center;
    color: var(--white);
    transition: all 0.5s ease;
    border: none;
    background: transparent;
    &:active {
      color: var(--secondary-color);
    }
  }

  /*Tablet*/
  @media ${devices.tablet} {
    height: 8.5em;
  }
  /*Desktop*/
  @media ${devices.laptop} {
    height: 8.5em;
    button {
      &:hover {
        color: var(--secondary-color);
      }
    }
  }
`;
