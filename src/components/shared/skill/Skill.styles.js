import styled from "styled-components";

import { devices } from "../../../helpers/breakpoints";

export const SkillContainer = styled.button`
  /* Phone */
  width: auto;
  height: auto;
  background-color: transparent;
  border: none;
  padding: 1em;
  border-radius: 50%;
  animation-name: skill-effect;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  img {
    width: ${(props) => (props.skill === "ExpressJS" ? "auto" : "30px")};
    height: ${(props) => (props.skill === "ExpressJS" ? "auto" : "30px")};
    transition: all 0.5s ease;
  }
  cursor: pointer;
  transition: all 0.5s ease;
  &:active {
    background-color: var(--blue);
    box-shadow: 0px 0px 10px 5px var(--blue);
  }
  @keyframes skill-effect {
    from {
      transform: translateX(-30em);
      opacity: 0;
    }
    to {
      transform: translateX(0em);
      opacity: 1;
    }
  }

  /*Tablet */
  @media ${devices.tablet} {
    img {
      width: ${(props) => (props.skill === "ExpressJS" ? "auto" : "40px")};
      height: ${(props) => (props.skill === "ExpressJS" ? "auto" : "40px")};
    }
  }

  /*Desktop */
  @media ${devices.laptop} {
    &:hover {
      background-color: var(--blue);
      img {
        transform: rotate(8deg);
      }
      box-shadow: 0px 0px 10px 5px var(--blue);
    }
  }
`;
