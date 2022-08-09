import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const ButtonComponent = styled.button`
  width: ${(props) => props.styles.width};
  height: ${(props) => props.styles.height};
  background-color: ${(props) => props.styles.backgroundColor};
  color: ${(props) => props.styles.color};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.styles.oneElement ? "0" : "0.5em")};
  border: ${(props) =>
    props.styles.border ? "solid 1px var(--white)" : "none"};
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  transition: all 0.6s ease;
  box-shadow: ${(props) =>
    props.styles.shadow && !props.styles.animation
      ? `0px 0px 10px 3px ${props.styles.hover}`
      : 0};

  svg {
    transition: all 0.6s ease;
  }
  &:active {
    background-color: ${(props) => props.styles.hover};
  }
  box-sizing: border-box;
  animation-name: ${(props) =>
    props.styles.animation ? props.styles.animation : ""};
  animation-duration: 2s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
  animation-direction: alternate;

  /* desktop design*/
  @media ${devices.laptop} {
    &:hover {
      background-color: ${(props) => props.styles.hover};
      transform: rotate(5deg);
    }
    &:hover svg {
      transform: scale(1.2) rotate(10deg);
    }
  }
`;
